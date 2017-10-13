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

    constructor(public usersService: UsersService,
                public formBuilder: FormBuilder,
                public router: Router,) {

    }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            email: '',
            contrasena: '',
            nombres: '',
            apellidos: '',
            usuario: '',
            tipo_id: '',
            numero_id: ''
        });

    }

    onSubmit() {
        this.usersService.create(
            this.userForm.get('email').value,
            this.userForm.get('contrasena').value,
            this.userForm.get('nombres').value,
            this.userForm.get('apellidos').value,
            this.userForm.get('usuario').value,
            this.userForm.get('tipo_id').value,
            this.userForm.get('numero_id').value
        ).subscribe(serverResponse => {
            this.router.navigate(['/signin']);
        }, error => {
            console.log(error);
        });


        this.router.navigate(['signin']);
    }

}
