import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {UsersService} from '../../services/users.service';
import {UsuarioEntity} from '../../models/UsuarioEntity';
import {PlanService} from "../../services/plan.service";
import {PreferenciaEntity} from "../../models/PreferenciaEntity";
import {NumberString} from "../../models/NumberString";

@Component({
    selector: 'app-user-edit-page',
    templateUrl: './user-edit-page.component.html',
    styleUrls: ['./user-edit-page.component.css'],

})
export class UserEditPageComponent implements OnInit {
    userForm: FormGroup;
    responseStatus:Object= [];
    private errorString: String;
    private errorCreate: String;
    private preferencias: PreferenciaEntity[] = [];
    private numstr: NumberString[] = [];
    private preferenciasSelect: string[] = [];
    private numberString: NumberString;

    constructor(public usersService: UsersService,
                public formBuilder: FormBuilder,
                public planService: PlanService,
                public router: Router) {

    }

    ngOnInit() {

        this.planService.getPreferences().subscribe(planResponse => {
            this.preferencias = planResponse;
        })

        this.userForm = this.formBuilder.group({
            email: '',
            contrasena: '',
            confirmcontrasena: '',
            nombres: '',
            apellidos: '',
            usuario: '',
            tipoid: '',
            numero_id: '',
            preferencias: [[]]
        });

    }

    onSubmit() {

        console.log("preferencias: "+this.userForm.get('preferencias').value)

        if(this.userForm.get('contrasena').value!=this.userForm.get('confirmcontrasena').value){
            this.errorString = "Porfavor asegurese que el campo de nueva contraseña y confirmar contraseña sean iguales";
        }
        else{
            this.usersService.create(
                0,
                this.userForm.get('email').value,
                this.userForm.get('contrasena').value,
                this.userForm.get('nombres').value,
                this.userForm.get('apellidos').value,
                this.userForm.get('usuario').value,
                this.userForm.get('tipoid').value,
                new Blob,
                this.userForm.get('numero_id').value,
            ).subscribe(serverResponse => {
                        console.log("Register User JSON: "+JSON.stringify(serverResponse));
                        console.log(this.userForm.get('preferencias').value);
                        console.log(serverResponse.idUsuario);
                        this.preferenciasSelect=this.userForm.get('preferencias').value;
                        for(let pref of this.preferenciasSelect){
                            this.numberString = new NumberString();
                            this.numberString.setNumberPair(serverResponse.idUsuario, pref);
                            this.numstr.push(this.numberString);
                        }
                        console.log(this.numstr);
                    this.usersService.registerPreferences(this.numstr).subscribe(response => this.router.navigate(
                            ['/signin']));
                },
                error => {
                    this.errorCreate = "Error Registrando: "+error.message;
                });

        }





    }

}
