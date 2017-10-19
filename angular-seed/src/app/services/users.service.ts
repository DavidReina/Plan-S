import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import {UsuarioEntity} from "../models/UsuarioEntity";
import {GlobalUserService} from "../common/global-user.service";

@Injectable()
export class UsersService extends APIService {
    private resourceUrl = 'user/users';

    constructor(public config: AppConfiguration,
                public authService: AuthService,
                public http: Http,
                public globalUser: GlobalUserService) {
        super(config, authService, http);
    }

    create(idUsuario: number, email: string, contrasena: string, nombres: string, apellidos: string, usuario: string, tipoId: string, fotoPerfil: Blob, numeroId: string):
    Observable<UsuarioEntity> {

        return this.post(this.resourceUrl, new UsuarioEntity().setUsuario(idUsuario, email, contrasena, nombres, apellidos, usuario, tipoId, fotoPerfil, numeroId));}


    update(idUsuario: number, email: string, contrasena: string, nombres: string, apellidos: string, usuario: string, tipoId: string, fotoPerfil: Blob, numeroId: string):Observable<UsuarioEntity>{

        return this.post(this.resourceUrl+"/update/"+idUsuario, new UsuarioEntity().setUsuario(idUsuario, email, contrasena, nombres, apellidos, usuario, tipoId, fotoPerfil, numeroId));

    }

    getUserbyEmail(email:string){
        return this.post(this.resourceUrl+"/email", {email}, {credentials:false}).map(
            userResponse => {
                if (userResponse) {

                    this.globalUser.setUserLogin(userResponse);
                    console.log("global user: "+this.globalUser.getUserLogin().nombres)
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
}

