import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import {UsuarioEntity} from "../models/UsuarioEntity";
import {GlobalUserService} from "../common/global-user.service";
import {NumberString} from "../models/NumberString";
import {PreferenciaEntity} from "../models/PreferenciaEntity";

@Injectable()
export class UsersService extends APIService {
    private resourceUrl = 'user/users';

    constructor(public config: AppConfiguration,
                public authService: AuthService,
                public http: Http,
                public globalUser: GlobalUserService,
                public user: UsuarioEntity) {
        super(config, authService, http);
    }

    create(idUsuario: number, email: string, contrasena: string, nombres: string, apellidos: string, usuario: string, tipoId: string, fotoPerfil: string, numeroId: string):
    Observable<UsuarioEntity> {
        this.user = new UsuarioEntity;
        this.user.setUsuarioCompleto(idUsuario, email, contrasena, nombres, apellidos, usuario, tipoId, fotoPerfil, numeroId);
        console.log("Register User JSON: "+JSON.stringify(this.user));
        return this.post(this.resourceUrl, {idUsuario, email, contrasena, nombres, apellidos, usuario, tipoId, fotoPerfil, numeroId},  {credentials:false});}


    update(idUsuario: number, email: string, contrasena: string, nombres: string, apellidos: string, usuario: string, tipoId: string, fotoPerfil: string, numeroId: string):
    Observable<UsuarioEntity>{
        console.log("Update Url: "+this.resourceUrl+"/update");
        this.user = new UsuarioEntity;
        this.user.setUsuarioCompleto(idUsuario, email, contrasena, nombres, apellidos, usuario, tipoId, fotoPerfil, numeroId);
        console.log("Update JSON: "+JSON.stringify(this.user));
        return this.post(this.resourceUrl+"/update", JSON.stringify(this.user));

    }

    getUserbyEmail(email:string){
        return this.post(this.resourceUrl+"/email", {email}, {credentials:false}).map(
            userResponse => {
                if (userResponse) {

                    this.globalUser.setUserLogin(userResponse);
                    console.log("global user: "+this.globalUser.usuarioLogin.nombres)
                }
            }
        );
    }

        list(): Observable<UsuarioEntity[]> {

               return this.get(this.resourceUrl);
           }

        login(email:string, contrasena:string){
            return this.post('user/login', {email, contrasena}, {credentials: false}).map(loginResponse => {
                if (loginResponse) {
                    console.log("Login Resposnse antes: "+this.authService.accessToken);
                    this.authService.accessToken = loginResponse.accessToken;
                    console.log("Login Resposnse desppues: "+this.authService.accessToken);
                }
            });
        }

    getAsistentesPlan(idplan: number): Observable<UsuarioEntity[]> {

        return this.get(this.resourceUrl+"/asistentes/"+idplan);
    }

    registerPreferences(numstr: NumberString[]): Observable<NumberString> {
        console.log(JSON.stringify(numstr));
        return this.post(this.resourceUrl+'/userPreferences', JSON.stringify(numstr), {credentials: false}).map(loginResponse => {
            return loginResponse;
        });
    }

    getUserPreferences(id:number): Observable<PreferenciaEntity[]>{
        console.log(id);
        return this.get(this.resourceUrl+"/preferences/"+id)
    }

    updateUserPreferences(numstr: NumberString[]): Observable<NumberString>{
        console.log(JSON.stringify(numstr));
        return this.post(this.resourceUrl+'/updateUserPreferences', JSON.stringify(numstr), {credentials: false}).map(loginResponse => {
            return loginResponse;
        });
    }


}

