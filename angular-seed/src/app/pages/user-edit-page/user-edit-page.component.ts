import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from "../../models/Usuario";
import { UsersService } from '../../services/usuario.service';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.css']

})
export class UserEditPageComponent implements OnInit {
  usuarioForm: FormGroup; 
  constructor(
    public usersService: UsersService,
    public formBuilder: FormBuilder,
    public router: Router,) {


  }
  private nombre: string;
        private apellido: string;
        private edad: Number;
        private TI: string;
	private identificacion: string;
        private ciudad: string;
	private mail: string;
	private password: string;

  ngOnInit() {
     this.usuarioForm = this.formBuilder.group({
      nombre: '',
      apellido: '',
      edad: '',
      TI: '',
      identificacion: '',
      ciudad: '',
      mail: '',
      password: ''
    });
  }

  onSubmit() {
     this.usersService.create(
      this.usuarioForm.get('nombre').value,
      this.usuarioForm.get('apellido').value,
      this.usuarioForm.get('edad').value,
      this.usuarioForm.get('TI').value,
      this.usuarioForm.get('identificacion').value,
      this.usuarioForm.get('ciudad').value,
      this.usuarioForm.get('mail').value,
      this.usuarioForm.get('password').value
    ).subscribe(serverResponse=>{
        this.router.navigate(['/users']);
    }, error=>{
      console.log(error);
    });
  
 
    this.router.navigate(['/users']);
  }
}
