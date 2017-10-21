import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {UsersService} from '../../services/users.service';
import {UsuarioEntity} from '../../models/UsuarioEntity';

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

    constructor(public usersService: UsersService,
                public formBuilder: FormBuilder,
                public router: Router) {

    }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            email: '',
            contrasena: '',
            confirmcontrasena: '',
            nombres: '',
            apellidos: '',
            usuario: '',
            tipo_id: '',
            numero_id: ''
        });

    }

    onSubmit() {

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
                this.userForm.get('tipo_id').value,
                new Blob,
                this.userForm.get('numero_id').value
            ).subscribe(serverResponse => {
                    this.router.navigate(
                        ['/signin']);
                },
                error => {
                    this.errorCreate = "Error Registrando: "+error.message;
                });

        }


    }

}
