import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import {UsuarioEntity} from "../models/UsuarioEntity";

@Injectable()
export class UsersService extends APIService {
	private resourceUrl = 'user/users';
  constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

create(email:string, contrasena:string, nombres:string,apellidos:string, usuario:string, tipo_id:string, numero_id:string):Observable<UsuarioEntity>{

return this.post(this.resourceUrl, new UsuarioEntity(email, contrasena, nombres, apellidos, usuario, tipo_id, numero_id));

}

 list(): Observable<UsuarioEntity[]> {
      
        return this.get(this.resourceUrl);
	}

  login(nombres: string, contrasena: string) {
    return this.post('user/login', { nombres, contrasena }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }
    });
  }
}
