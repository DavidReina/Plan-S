import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Usuario } from "../models/Usuario";





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
  create(value: string, value2: string, value3: Number, value4:string, value5: string, value6: string, value7: string, value8: string):Observable<Usuario>{
    return this.post(this.resourceUrl,new Usuario(value,value2,value3,value4,value5,value6,value7,value8));

  }
  list(): Observable<Usuario[]> {
    return this.get(this.resourceUrl);
  }
  login(mail: string, password: string) {
    return this.post('user/login', { mail, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }
    });
    
  }
}
