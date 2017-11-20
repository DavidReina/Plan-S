import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanService } from '../../services/plan.service';
import { Plan } from '../../models/plan';
import {GlobalUserService} from "../../common/global-user.service";
import {DatePipe} from "@angular/common";
import {PreferenciaEntity} from "../../models/PreferenciaEntity";
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-create-plan-page',
  templateUrl: './create-plan-page.component.html',
  styleUrls: ['./create-plan-page.component.css']
})
export class CreatePlanPageComponent implements OnInit {
   private userForm: FormGroup;
   private errorString: String;
   private errorPlace:String;
   private preferencias: PreferenciaEntity[] = [];

    public latitude: number;
    public longitude: number;
    public searchControl: FormControl;
    public zoom: number;
    public address: string;
    public autocompleted: boolean;

    @ViewChild("search")
    public searchElementRef: ElementRef;

  constructor(
    public globaluser: GlobalUserService,
    public planService: PlanService,
    public formBuilder: FormBuilder,
    public router: Router,
    public date:DatePipe,
    public plan:Plan,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
    
  }

  ngOnInit() {
      this.autocompleted=true;
      //set google maps defaults
      this.zoom = 4;
      this.latitude = 39.8282;
      this.longitude = -98.5795;

      //create search FormControl
      this.searchControl = new FormControl();

      //set current position
      this.setCurrentPosition();

      this.planService.getPreferences().subscribe(planResponse => {
          this.preferencias = planResponse;
      })

      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
          let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
              types: ["address"]
          });
          autocomplete.addListener("place_changed", () => {
              this.ngZone.run(() => {

                  console.log()
                  //get the place result
                  let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                  //verify result
                  if (place.geometry === undefined || place.geometry === null) {
                      return;
                  }

                  //set latitude, longitude and zoom
                  this.address = place.formatted_address;
                  this.autocompleted=false;
                  this.latitude = place.geometry.location.lat();
                  this.longitude = place.geometry.location.lng();
                  this.zoom = 12;
              });
          });
      });

    this.userForm = this.formBuilder.group({
      nombre: '',
      descripcion: '',
      fechainicio: '',
      fechafinal: '',
      costo: '',
      preferencia: ['']
    });



  }

  onSubmit() {

    if(this.autocompleted){
        this.errorPlace="Porfavor seleccione un lugar basandose en la lista desplegada para ubicar la direccion del plan.";
    }
    else{
        this.plan.nombre = this.userForm.get('nombre').value;
        this.plan.descripcion = this.userForm.get('descripcion').value;
        this.plan.ubicacion=this.address+"|"+this.latitude.toString()+"|"+this.longitude.toString();

        console.log(this.plan.ubicacion);

        this.plan.fechaInicio = new Date(this.userForm.get('fechainicio').value).getTime();
        this.plan.fechaFinal = new Date(this.userForm.get('fechafinal').value).getTime()
        this.plan.costoPromedio = this.userForm.get('costo').value;
        this.plan.creadorPlan = this.globaluser.usuarioLogin.idUsuario;
        this.plan.detallePreferencia=this.userForm.get('preferencia').value;
        this.plan.imagenPlan= new Blob;

        this.planService.createPlan(this.plan).subscribe(serverResponse=>{
            this.router.navigate(['/yourplans']);
        }, error=>{
            this.errorString = "Error Suscribiendo: "+error.message;
        });


        this.router.navigate(['planes']);
    }
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
