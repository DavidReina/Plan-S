import { Component, OnInit } from '@angular/core';
import {GlobalUserService} from "../../common/global-user.service";
import {FormGroup, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-review-page',
  templateUrl: './user-review-page.component.html',
  styleUrls: ['./user-review-page.component.css']
})
export class UserReviewPageComponent implements OnInit {
  private userForm:FormGroup;
  constructor(public globalUser: GlobalUserService, public formBuilder:FormBuilder, public router: Router) { }

  ngOnInit() {
      this.userForm = this.formBuilder.group({
          email: this.globalUser.usuarioLogin.email,
          nombres: this.globalUser.usuarioLogin.nombres,
          apellidos: this.globalUser.usuarioLogin.apellidos,
          usuario: this.globalUser.usuarioLogin.usuario,
          tipo_id: this.globalUser.usuarioLogin.tipoId,
          numero_id: this.globalUser.usuarioLogin.numeroId
      });
  }

    onSubmit() {
        this.router.navigate(['modifyuser']);
    }

}
