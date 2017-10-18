import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { AuthService } from '../../common/auth.service';

@Component({
  selector: 'app-signout-page',
  templateUrl: './signout-page.component.html',
  styleUrls: ['./signout-page.component.css']
})
export class SignoutPageComponent implements OnInit {

  constructor(public authService: AuthService,
              public router: Router) {
      console.log("log off antes: "+this.authService.accessToken);
      this.authService.signOut();
      console.log("log off despues: "+this.authService.accessToken);
      this.router.navigate(['/']);
      }

  ngOnInit() {

  }

}
