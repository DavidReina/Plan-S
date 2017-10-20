import { Component, OnInit } from '@angular/core';
import { Plan } from '../../models/plan';
import { PlanService } from '../../services/plan.service';
import { Router } from '@angular/router';
import {GlobalUserService} from "../../common/global-user.service";
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-your-plans-page',
    templateUrl: './your-plans-page.component.html',
    styleUrls: ['./your-plans-page.component.css']
})
export class YourPlansPageComponent implements OnInit {
    private planes: Plan[] = [];
    constructor(public planService: PlanService, public router: Router, public globaluser:GlobalUserService) {
    }


    ngOnInit() {
        this.planService.listYourPlans(this.globaluser.usuarioLogin.idUsuario).subscribe(planResponse => {
            this.planes = planResponse;
            console.log("Usuario Login: "+this.globaluser.usuarioLogin.idUsuario);
        })
    }


}