import { Component } from '@angular/core';
import { AuthService } from './common/auth.service';
import { Router } from '@angular/router';
import {GlobalUserService} from "./common/global-user.service";
import {FormGroup, FormBuilder} from "@angular/forms";
import {GlobalSearchService} from "./common/global-search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private searchForm:FormGroup;
  constructor(
    public authService: AuthService,
    public router: Router,
    public globalUser: GlobalUserService,
    public formBuilder:FormBuilder,
    public globalsearch:GlobalSearchService
  ) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }

    this.searchForm = this.formBuilder.group({
          search: ''
    });
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  signOut() {
    this.authService.signOut();
  }

  onSubmitSearch(){
     this.globalsearch.search.search=this.searchForm.get('search').value;

     this.router.navigate(['refreshsearchpage']);
  }


}
