import { Component, OnInit } from '@angular/core';
import {GlobalSearchService} from "../../common/global-search.service";
import {PlanService} from "../../services/plan.service";
import {Router} from "@angular/router";
import {GlobalUserService} from "../../common/global-user.service";
import {GlobalPlanService} from "../../common/global-plan.service";
import {Plan} from "../../models/plan";

@Component({
  selector: 'app-plan-search-page',
  templateUrl: './plan-search-page.component.html',
  styleUrls: ['./plan-search-page.component.css']
})
export class PlanSearchPageComponent implements OnInit {
  private planes: Plan[] = [];
  constructor(public globalsearch: GlobalSearchService, public planService: PlanService, public router: Router, public globaluser:GlobalUserService, public globalplan:GlobalPlanService) { }

    ngOnInit() {
        this.planService.planSearch(this.globalsearch.search.search, this.globaluser.usuarioLogin.idUsuario).subscribe(planResponse => {
            this.planes = planResponse;
        })
    }

    setClickedRow(index: number){
        this.globalplan.setGlobalPlan(this.planes[index]);
        this.globalplan.plan.fechaInicio = this.planes[index].fechaInicio;
        this.globalplan.plan.fechaFinal = this.planes[index].fechaFinal;
        this.router.navigate(['../reviewplansubscribe']);
    }


}
