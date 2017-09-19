import { Component, OnInit } from '@angular/core';
import { Plan } from '../../models/plan';
import { PlanService } from '../../services/plan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.css']
})
export class TaskListPageComponent implements OnInit {
  private planes: Plan[] = [];
  constructor(public planService: PlanService, public router: Router) {
    


  }


  ngOnInit() {
    this.planService.list().subscribe(todosResponse => {
      this.planes = todosResponse;
    })
  }

  onsubmit() {
    this.router.navigate(['newplan']);
  }

}
