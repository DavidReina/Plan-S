import { Component, OnInit } from '@angular/core';
import { Plan } from '../../models/plan';
import { PlanService } from '../../services/plan.service';
import { Router } from '@angular/router';
import {GlobalUserService} from "../../common/global-user.service";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.css']
})
export class TaskListPageComponent implements OnInit {
  private planes: Plan[] = [];
  constructor(public planService: PlanService, public router: Router, public globaluser:GlobalUserService) {



  }


  ngOnInit() {
    this.planService.list().subscribe(planResponse => {
      this.planes = planResponse;
        console.log("Usuario Login: "+this.globaluser.usuarioLogin.idUsuario);
    })


  }


}
