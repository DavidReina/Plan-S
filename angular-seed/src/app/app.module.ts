import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppConfiguration } from './common/config/app-configuration.service';
import { INITIAL_CONFIG } from './common/config/initial-config';

import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';
import { TaskEditPageComponent } from './pages/task-edit-page/task-edit-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EventoService } from './services/evento.service';
import { HttpModule } from '@angular/http';
import { SingInPageComponent } from './pages/sign-in/sing-in-page.component';
import { AuthService } from './common/auth.service';
import { AppDataService } from './common/app-data.service';
import { UsersService } from './services/usuario.service';
import { UserEditPageComponent } from "./pages/user-edit-page/user-edit-page.component";
import { UserListPageComponent } from "./pages/user-list-page/user-list-page.component";

const ROUTES = [
  { path: '', component: SingInPageComponent },
  { path: 'home', component: HomePageComponent },
  {
    path: 'tasks', component: TaskListPageComponent,
    canActivate: [AuthService],
  },
  {
    path: 'edit', component: TaskEditPageComponent,
    canActivate: [AuthService],
  },
  {
    path: 'users', component: UserListPageComponent,
    canActivate: [AuthService],
  },
  {
    path: 'items', component: UserEditPageComponent,
    
    canActivate: [AuthService],
  },
  {
    path: '**', component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TaskListPageComponent,
    TaskEditPageComponent,
    UserEditPageComponent,
    UserListPageComponent,
    PageNotFoundComponent,
    SingInPageComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: INITIAL_CONFIG,
      useValue: {
        apiURL: 'http://localhost:8080'
      }
    },
    EventoService,
    AuthService,
    AppDataService,
    UsersService,
    AppConfiguration],
  bootstrap: [AppComponent]
 })
 export class AppModule { }