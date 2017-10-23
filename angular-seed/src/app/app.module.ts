import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppConfiguration } from './common/config/app-configuration.service';
import { INITIAL_CONFIG } from './common/config/initial-config';

import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { TaskListPageComponent } from './pages/planes-recomendados-page/task-list-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PlanService } from './services/plan.service';
import { TodoService } from './services/todo.service';
import { HttpModule } from '@angular/http';
import { SingInPageComponent } from './pages/sign-in/sing-in-page.component';
import { AuthService } from './common/auth.service';
import { AppDataService } from './common/app-data.service';
import { UsersService } from './services/users.service';
import { UserEditPageComponent } from "./pages/register-user-page/user-edit-page.component";
import { UserListPageComponent } from "./pages/user-list-page/user-list-page.component";
import { CreatePlanPageComponent } from './pages/create-plan-page/create-plan-page.component';
import { UserReviewPageComponent } from './pages/user-review-page/user-review-page.component';
import { YourPlansPageComponent } from './pages/your-plans-page/your-plans-page.component';
import { ModifyUserPageComponent } from './pages/modify-user-page/modify-user-page.component';
import { SignoutPageComponent } from './pages/signout-page/signout-page.component';
import {GlobalUserService} from "./common/global-user.service";
import {UsuarioEntity} from "./models/UsuarioEntity";
import {Plan} from "./models/plan";
import { ReviewPlanSubscribePageComponent } from './pages/review-plan-subscribe-page/review-plan-subscribe-page.component';
import {GlobalPlanService} from "./common/global-plan.service";
import {GlobalSearchService} from "./common/global-search.service";
import {NumberPair} from "./models/NumberPair";
import {DatePipe} from "@angular/common";
import { ReviewPlanUnsubscribePageComponent } from './pages/review-plan-unsubscribe-page/review-plan-unsubscribe-page.component';
import { YourSubscribedPlanPageComponent } from './pages/your-subscribed-plan-page/your-subscribed-plan-page.component';
import { YourPlanEditPageComponent } from './pages/your-plan-edit-page/your-plan-edit-page.component';
import { PlanSearchPageComponent } from './pages/plan-search-page/plan-search-page.component';
import {Search} from "./models/search";
import { RefreshSearchPageComponent } from './pages/refresh-search-page/refresh-search-page.component';

const ROUTES = [
  { path: '', component: HomePageComponent },
  { path: 'signin', component: SingInPageComponent },
  {
    path: 'planes', component: TaskListPageComponent,
    canActivate: [AuthService],
  },
  {
    path: 'register', component: UserEditPageComponent,
  },
  {
    path: 'newplan', component: CreatePlanPageComponent,
    canActivate: [AuthService],
    
  },
    {
        path: 'yourplans', component: YourPlansPageComponent,
        canActivate: [AuthService],

    },
    {
        path: 'userreview', component: UserReviewPageComponent,
        canActivate: [AuthService],

    },
    {
        path: 'modifyuser', component: ModifyUserPageComponent,
        canActivate: [AuthService],

    },
    {
        path: 'signout', component: SignoutPageComponent,
        canActivate: [AuthService],

    },
    {
        path: 'reviewplansubscribe', component: ReviewPlanSubscribePageComponent,
        canActivate: [AuthService],

    },
    {
        path: 'planssubscribed', component: YourSubscribedPlanPageComponent,
        canActivate: [AuthService],

    },
    {
        path: 'reviewplanunsubscribed', component: ReviewPlanUnsubscribePageComponent,
        canActivate: [AuthService],

    },
    {
        path: 'yourplanedit', component: YourPlanEditPageComponent,
        canActivate: [AuthService],

    },
    {
        path: 'plansearch', component: PlanSearchPageComponent,
        canActivate: [AuthService],

    },
    {
        path: 'refreshsearchpage', component: RefreshSearchPageComponent,
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
    UserEditPageComponent,
    UserListPageComponent,
    PageNotFoundComponent,
    SingInPageComponent,
    CreatePlanPageComponent,
    UserReviewPageComponent,
    YourPlansPageComponent,
    ModifyUserPageComponent,
    SignoutPageComponent,
    ReviewPlanSubscribePageComponent,
    ReviewPlanUnsubscribePageComponent,
    YourSubscribedPlanPageComponent,
    YourPlanEditPageComponent,
    PlanSearchPageComponent,
    RefreshSearchPageComponent,
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
    PlanService,
    TodoService,
    AuthService,
    AppDataService,
    UsersService,
    GlobalUserService,
      UsuarioEntity,
      GlobalPlanService,
      Plan,
      NumberPair,
      DatePipe,
      GlobalSearchService,
      Search,
    AppConfiguration],
  bootstrap: [AppComponent]
 })
 export class AppModule { }
