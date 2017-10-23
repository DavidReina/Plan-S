import { Component, OnInit } from '@angular/core';
import {GlobalPlanService} from "../../common/global-plan.service";
import {FormGroup, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {PlanService} from "../../services/plan.service";
import {GlobalUserService} from "../../common/global-user.service";
import {NumberPair} from "../../models/NumberPair";
import { DatePipe } from '@angular/common';
import {UsuarioEntity} from "../../models/UsuarioEntity";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-review-plan-unsubscribe-page',
  templateUrl: './review-plan-unsubscribe-page.component.html',
  styleUrls: ['./review-plan-unsubscribe-page.component.css']
})
export class ReviewPlanUnsubscribePageComponent implements OnInit {
    private userForm:FormGroup;
    private errorString: String;
    private usuarios: UsuarioEntity[] = [];

    constructor(public globalPlan:GlobalPlanService, public formBuilder:FormBuilder, public router: Router, public planService: PlanService, public globalUser: GlobalUserService,
                public numberPair:NumberPair, public date: DatePipe, public userService: UsersService) {


    }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            nombre: this.globalPlan.plan.nombre,
            descripcion: this.globalPlan.plan.descripcion,
            ubicacion: this.globalPlan.plan.ubicacion,
            fechainicio: this.date.transform(this.globalPlan.plan.fechaInicio,'short'),
            fechafinal: this.date.transform(this.globalPlan.plan.fechaFinal, 'short'),
            costo: this.globalPlan.plan.costoPromedio
        });

        this.userService.getAsistentesPlan(this.globalPlan.plan.idPlan).subscribe(usuarioResponse => {
            this.usuarios = usuarioResponse;
        })
    }

    onSubmit(){
        console.log("id plan: "+this.globalPlan.plan.idPlan);
        console.log("id user: "+this.globalUser.usuarioLogin.idUsuario);
        this.numberPair.setNumberPair(this.globalPlan.plan.idPlan,this.globalUser.usuarioLogin.idUsuario);
        console.log("numberpair plan: "+this.numberPair.idPlan);
        this.numberPair.idPlan=this.globalPlan.plan.idPlan;

        this.numberPair.idUser=0;
        this.numberPair.idUser=this.globalUser.usuarioLogin.idUsuario;
        this.planService.unsuscribirsePlan(
            this.numberPair
        ).subscribe(serverResponse => {
                console.log("Server responce: "+serverResponse);
                this.router.navigate(
                    ['../planssubscribed']);
            },
            error => {
                this.errorString = "Error Desuscribiendo: "+error.message;
            });

    }

}
