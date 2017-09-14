import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AuthService } from '../common/auth.service';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { User } from "../models/User";

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

create(email:string,username:string,firstname:string,lastname:string,password:string, ti:string, identification:identification):Observable<User>{

return this.post(this.resourceUrl, new User(email, password, firstname, lastname, username, ti, identification));

}

 list(): Observable<User[]> {
      
        return this.get(this.resourceUrl);
	}

  login(username: string, password: string) {
    return this.post('user/login', { username, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }
    });
  }
}
