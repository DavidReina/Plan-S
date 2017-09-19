import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Plan } from '../../models/plan';

@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.css']
})
export class TaskListPageComponent implements OnInit {
  private planes: Plan[] = [];
  constructor(public todoService: TodoService) {

  }


  ngOnInit() {
    this.todoService.list().subscribe(todosResponse => {
      this.planes = todosResponse;
    })
  }

}
