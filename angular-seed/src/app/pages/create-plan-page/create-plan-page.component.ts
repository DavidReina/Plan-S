import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanService } from '../../services/plan.service';
import { Plan } from '../../models/plan';
import {GlobalUserService} from "../../common/global-user.service";
import {DatePipe} from "@angular/common";
import {PreferenciaEntity} from "../../models/PreferenciaEntity";

@Component({
  selector: 'app-create-plan-page',
  templateUrl: './create-plan-page.component.html',
  styleUrls: ['./create-plan-page.component.css']
})
export class CreatePlanPageComponent implements OnInit {
   private userForm: FormGroup;
   private errorString: String;
    private preferencias: PreferenciaEntity[] = [];

  constructor(
    public globaluser: GlobalUserService,
    public planService: PlanService,
    public formBuilder: FormBuilder,
    public router: Router,
    public date:DatePipe,
    public plan:Plan
  ) {
    
  }

  ngOnInit() {

      this.planService.getPreferences().subscribe(planResponse => {
          this.preferencias = planResponse;
      })

      this.userForm = this.formBuilder.group({
      nombre: '',
      descripcion: '',
      ubicacion: '',
      fechainicio: '',
      fechafinal: '',
      costo: '',
      preferencia: ['']
    });



  }

  onSubmit() {
    this.plan.nombre = this.userForm.get('nombre').value;
    this.plan.descripcion = this.userForm.get('descripcion').value;
    this.plan.ubicacion = this.userForm.get('ubicacion').value;

    console.log(this.userForm.get('fechainicio').value);

    this.plan.fechaInicio = new Date(this.userForm.get('fechainicio').value).getTime();
    this.plan.fechaFinal = new Date(this.userForm.get('fechafinal').value).getTime()
    this.plan.costoPromedio = this.userForm.get('costo').value;
    this.plan.creadorPlan = this.globaluser.usuarioLogin.idUsuario;
    this.plan.detallePreferencia=this.userForm.get('preferencia').value;
    this.plan.imagenPlan= new Blob;

    this.planService.createPlan(this.plan).subscribe(serverResponse=>{
        this.router.navigate(['/yourplans']);
    }, error=>{
        this.errorString = "Error Suscribiendo: "+error.message;
    });
  
 
    this.router.navigate(['planes']);
  }

}
