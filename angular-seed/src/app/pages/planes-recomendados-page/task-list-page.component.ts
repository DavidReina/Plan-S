import { Component, OnInit } from '@angular/core';
import { Plan } from '../../models/plan';
import { PlanService } from '../../services/plan.service';
import { Router } from '@angular/router';
import {GlobalUserService} from "../../common/global-user.service";
import { DatePipe } from '@angular/common';
import {GlobalPlanService} from "../../common/global-plan.service";

@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.css']
})
export class TaskListPageComponent implements OnInit {
  private planes: Plan[] = [];
  private selectedRow : number;
  constructor(public planService: PlanService, public router: Router, public globalplan:GlobalPlanService, public globalUser: GlobalUserService) {


  }


  ngOnInit() {
    this.planService.list(this.globalUser.usuarioLogin.idUsuario).subscribe(planResponse => {
      this.planes = planResponse;
    })
  }

    setClickedRow(index: number){
        this.selectedRow = index;
        console.log(this.planes[this.selectedRow].idPlan);
        this.globalplan.setGlobalPlan(this.planes[this.selectedRow]);
        console.log("global plan id: "+this.globalplan.plan.idPlan);
        this.router.navigate(['../reviewplansubscribe']);
    }



}
