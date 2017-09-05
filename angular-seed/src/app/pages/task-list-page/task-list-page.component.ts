import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/Evento';

@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.css']
})
export class TaskListPageComponent implements OnInit {
  private eventos: Evento[] = [];
  constructor(public eventoService: EventoService) {

  }


  ngOnInit() {
    this.eventoService.list().subscribe(eventosResponse => {
      this.eventos = eventosResponse;
    })
  }

}
