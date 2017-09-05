import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsersService } from '../../services/usuario.service';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {
  private users: Usuario[] = [];
  constructor(public usersService: UsersService) {

  }


  ngOnInit() {
    this.usersService.list().subscribe(usersResponse => {
      this.users = usersResponse;
    })
  }

}
