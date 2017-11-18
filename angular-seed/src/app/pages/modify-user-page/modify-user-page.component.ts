import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {GlobalUserService} from "../../common/global-user.service";
import {UsersService} from "../../services/users.service";
import {PreferenciaEntity} from "../../models/PreferenciaEntity";
import {PlanService} from "../../services/plan.service";
import {NumberString} from "../../models/NumberString";

@Component({
  selector: 'app-modify-user-page',
  templateUrl: './modify-user-page.component.html',
  styleUrls: ['./modify-user-page.component.css']
})
export class ModifyUserPageComponent implements OnInit {
  private userForm: FormGroup;
  private errorString: String;
  private errorUpdate: String;
  private preferencias: PreferenciaEntity[] = [];
  private usrPreferences: PreferenciaEntity[]=[];
  private usrPrefStr: String[]=[];
  private preferenciasSelect: string[] = [];
  private numberString: NumberString;
  private numstr: NumberString[] = [];

  constructor(public usersService: UsersService, public planService: PlanService, public globalUser: GlobalUserService, public formBuilder:FormBuilder, public router: Router) { }

  ngOnInit() {

      this.planService.getPreferences().subscribe(planResponse => {
          this.preferencias = planResponse;
      })

      this.usersService.getUserPreferences(this.globalUser.usuarioLogin.idUsuario).subscribe(rsp=> {this.usrPreferences=rsp;
          for(let pref of this.usrPreferences){
              this.usrPrefStr.push(pref.nombre);
          }
          this.userForm.get('preferencias').setValue(this.usrPrefStr);
          console.log(this.usrPrefStr);
      })



      this.userForm = this.formBuilder.group({
          email: this.globalUser.usuarioLogin.email,
          nombres: this.globalUser.usuarioLogin.nombres,
          apellidos: this.globalUser.usuarioLogin.apellidos,
          usuario: this.globalUser.usuarioLogin.usuario,
          tipoid: '',
          numero_id: this.globalUser.usuarioLogin.numeroId,
          contrasena: '',
          confirmcontrasena: '',
          preferencias: [[]]
      });

      this.userForm.get('tipoid').setValue(this.globalUser.usuarioLogin.tipoId);
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
                this.userForm.get('tipoid').value,
                new Blob,
                this.userForm.get('numero_id').value
            ).subscribe(serverResponse => {
                    this.usrPreferences = [];
                    this.preferenciasSelect=this.userForm.get('preferencias').value;
                    for(let pref of this.preferenciasSelect){
                        this.numberString = new NumberString();
                        this.numberString.setNumberPair(serverResponse.idUsuario, pref);
                        this.numstr.push(this.numberString);
                    }
                    this.usersService.updateUserPreferences(this.numstr).subscribe(response =>
                        this.router.navigate(
                        ['../userreview']));
                },
                error => {
                    this.errorUpdate = "Error Actualizando: "+error.message;
                });
        }







    }

}
