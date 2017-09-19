import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanService } from '../../services/plan.service';
import { Plan } from '../../models/plan';

@Component({
  selector: 'app-create-plan-page',
  templateUrl: './create-plan-page.component.html',
  styleUrls: ['./create-plan-page.component.css']
})
export class CreatePlanPageComponent implements OnInit {
   userForm: FormGroup; 
  constructor(
    public usersService: PlanService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {
    
  }

  ngOnInit() {
      this.userForm = this.formBuilder.group({
      nombre: '',
      descripcion: '',
      ubicacion: '',
      fecha: '',
      costo: ''
    });

  }

  onSubmit() {
    this.usersService.create(
      this.userForm.get('nombre').value,
      this.userForm.get('descripcion').value,
      this.userForm.get('ubicacion').value,
	  this.userForm.get('fecha').value,
	  this.userForm.get('costo').value
    ).subscribe(serverResponse=>{
        this.router.navigate(['/planes']);
    }, error=>{
      console.log(error);
    });
  
 
    this.router.navigate(['planes']);
  }

}
