import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {GlobalUserService} from "../../common/global-user.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-modify-user-page',
  templateUrl: './modify-user-page.component.html',
  styleUrls: ['./modify-user-page.component.css']
})
export class ModifyUserPageComponent implements OnInit {
  private userForm: FormGroup;
  private errorString: String;
  private errorUpdate: String;
  constructor(public usersService: UsersService, public globalUser: GlobalUserService, public formBuilder:FormBuilder, public router: Router) { }

  ngOnInit() {
      this.userForm = this.formBuilder.group({
          email: this.globalUser.usuarioLogin.email,
          nombres: this.globalUser.usuarioLogin.nombres,
          apellidos: this.globalUser.usuarioLogin.apellidos,
          usuario: this.globalUser.usuarioLogin.usuario,
          tipo_id: this.globalUser.usuarioLogin.tipoId,
          numero_id: this.globalUser.usuarioLogin.numeroId,
          contrasena: '',
          confirmcontrasena: ''
      });
  }

    onSubmit() {
        if(this.userForm.get('contrasena').value!=this.userForm.get('confirmcontrasena').value){
            this.errorString = "Porfavor asegurese que el campo de nueva contraseña y confirmar contraseña sean iguales";
        }
        else{
            this.usersService.update(this.globalUser.usuarioLogin.idUsuario,
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
                        ['../userreview']);
                },
                error => {
                    this.errorUpdate = "Error Actualizando: "+error.message;
                });
        }







    }

}
