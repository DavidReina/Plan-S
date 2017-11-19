import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {GlobalPlanService} from "../../common/global-plan.service";
import {Router} from "@angular/router";
import {PlanService} from "../../services/plan.service";
import {GlobalUserService} from "../../common/global-user.service";
import {NumberPair} from "../../models/NumberPair";
import {DatePipe} from "@angular/common";
import {Plan} from "../../models/plan";
import {UsuarioEntity} from "../../models/UsuarioEntity";
import {UsersService} from "../../services/users.service";
import {PreferenciaEntity} from "../../models/PreferenciaEntity";
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-your-plan-edit-page',
  templateUrl: './your-plan-edit-page.component.html',
  styleUrls: ['./your-plan-edit-page.component.css']
})
export class YourPlanEditPageComponent implements OnInit {

    private userForm:FormGroup;
    private errorString: String;
    private fechainicio: String;
    private fechafinal: String;
    private usuarios: UsuarioEntity[] = [];
    private preferencias: PreferenciaEntity[] = [];
    private preferenciaSeleccionada:PreferenciaEntity;
    private nombre:string;

    public latitude: number;
    public longitude: number;
    public searchControl: FormControl;
    public zoom: number;
    public address: string;

    @ViewChild("search")
    public searchElementRef: ElementRef;

    constructor(public globalPlan:GlobalPlanService, public formBuilder:FormBuilder, public router: Router, public planService: PlanService, public globalUser: GlobalUserService,
                public numberPair:NumberPair, public plan:Plan, public userService: UsersService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {


    }

    ngOnInit() {

        //set google maps defaults
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;

        //create search FormControl
        this.searchControl = new FormControl();

        //set current position
        this.setCurrentPosition();

        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }

                    //set latitude, longitude and zoom
                    this.address = place.formatted_address;
                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();
                    this.zoom = 12;
                });
            });
        });

        this.planService.getPreferences().subscribe(planResponse => {
            this.preferencias = planResponse;
            this.preferenciaSeleccionada=this.preferencias[this.globalPlan.plan.detallePreferencia-1];

            this.preferencias.splice(this.globalPlan.plan.detallePreferencia-1,1);
            this.preferencias.splice(this.preferencias.length,0,this.preferenciaSeleccionada);

        })

        this.fechainicio=new Date(this.globalPlan.plan.fechaInicio-18000000).toISOString().slice(0,16);
        this.fechafinal=new Date(this.globalPlan.plan.fechaFinal-18000000).toISOString().slice(0,16);

        this.userForm = this.formBuilder.group({
            nombre: this.globalPlan.plan.nombre,
            descripcion: this.globalPlan.plan.descripcion,
            fechainicio: this.fechainicio,
            fechafinal: this.fechafinal,
            costo: this.globalPlan.plan.costoPromedio,
            preferencia: ['']
        });

        this.userService.getAsistentesPlan(this.globalPlan.plan.idPlan).subscribe(usuarioResponse => {
            this.usuarios = usuarioResponse;
        })
    }

    onSubmit(){

        this.plan.idPlan = this.globalPlan.plan.idPlan;
        this.plan.nombre = this.userForm.get('nombre').value;
        this.plan.descripcion = this.userForm.get('descripcion').value;
        this.plan.fechaInicio = new Date(this.userForm.get('fechainicio').value).getTime();
        this.plan.fechaFinal = new Date(this.userForm.get('fechafinal').value).getTime();
        this.plan.costoPromedio = this.userForm.get('costo').value;

        this.plan.ubicacion=this.address+","+this.latitude.toString()+","+this.longitude.toString();

        this.nombre=this.userForm.get('preferencia').value;

        for (let preference of this.preferencias) {
            if(preference.nombre==this.nombre){
                this.plan.detallePreferencia=preference.idPreferencia;
            }
        }

        console.log(this.plan.detallePreferencia);

        this.planService.updatePlan(
            this.plan
        ).subscribe(serverResponse => {
                this.router.navigate(
                    ['../yourplans']);
            },
            error => {
                this.errorString = "Error Desuscribiendo: "+error.message;
            });

    }

    private setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 12;
            });
        }
    }

}
