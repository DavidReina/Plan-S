import { Component } from '@angular/core';
import { AuthService } from './common/auth.service';
import { Router } from '@angular/router';
import {GlobalUserService} from "./common/global-user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
    public authService: AuthService,
    public router: Router,
    public globalUser: GlobalUserService
  ) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  isLoggedIn() {
    console.log("Respuesta Log in: "+this.authService.isLoggedIn());
    return this.authService.isLoggedIn();
  }

  signOut() {
    this.authService.signOut();
  }


}
