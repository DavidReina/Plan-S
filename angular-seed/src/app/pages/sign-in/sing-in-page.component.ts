import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-sing-in-page',
  templateUrl: './sing-in-page.component.html',
  styleUrls: ['./sing-in-page.component.css']
})
export class SingInPageComponent implements OnInit {
  signInForm: FormGroup;
  loginError: String;
  constructor(
    public usersService: UsersService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) { 
    
  }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  doLogin() {

    console.log(this.signInForm.get('email').value);
    console.log(this.signInForm.get('password').value);

    this.usersService.login(
      this.signInForm.get('email').value,
      this.signInForm.get('password').value).subscribe(loginResponse => {
        this.router.navigate(['planes']);
      }, error => {
        this.loginError = 'Error Signing in: ' + (error && error.message ? error.message : '');
      })
  }

}
