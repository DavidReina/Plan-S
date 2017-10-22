import { Component, OnInit } from '@angular/core';
import { Plan } from '../../models/plan';
import { PlanService } from '../../services/plan.service';
import { Router } from '@angular/router';
import {GlobalUserService} from "../../common/global-user.service";
import { DatePipe } from '@angular/common';
import {GlobalPlanService} from "../../common/global-plan.service";

@Component({
    selector: 'app-your-plans-page',
    templateUrl: './your-plans-page.component.html',
    styleUrls: ['./your-plans-page.component.css']
})
export class YourPlansPageComponent implements OnInit {
    private planes: Plan[] = [];
    constructor(public planService: PlanService, public router: Router, public globaluser:GlobalUserService, public globalplan:GlobalPlanService) {
    }


    ngOnInit() {
        this.planService.listYourPlans(this.globaluser.usuarioLogin.idUsuario).subscribe(planResponse => {
            this.planes = planResponse;
        })
    }

    setClickedRow(index: number){
        this.globalplan.setGlobalPlan(this.planes[index]);
        this.globalplan.plan.fechaInicio = this.planes[index].fechaInicio;
        this.globalplan.plan.fechaFinal = this.planes[index].fechaFinal;
        this.router.navigate(['../yourplanedit']);
    }


}