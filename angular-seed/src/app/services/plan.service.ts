import { Plan } from '../models/plan';
import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { Observable } from "rxjs/Observable";
import {GlobalUserService} from "../common/global-user.service";
import {NumberPair} from "../models/NumberPair";

@Injectable()
export class PlanService extends APIService{
  private resourceUrl = 'plan/plans';
  
      /*create(nombre:string,descripcion:string,ubicacion:string,fecha:string,costo:number):Observable<Plan>{
        return this.post(this.resourceUrl,new Plan(nombre,descripcion,ubicacion,fecha,costo));

      }*/
      
      list(id:number): Observable<Plan[]> {
          return this.get(this.resourceUrl+"/notuser/"+id);
      }

      listYourPlans(id: number): Observable<Plan[]>{
          return this.get(this.resourceUrl+"/"+id);
      }

      suscribirsePlan(numberPair: NumberPair){
          return this.post(this.resourceUrl+"/subscribe", JSON.stringify(numberPair));
      }

        unsuscribirsePlan(numberPair: NumberPair){
            return this.post(this.resourceUrl+"/unsubscribe", JSON.stringify(numberPair));
        }

      YourSubscribedPlans(id:number): Observable<Plan[]>{
          return this.get(this.resourceUrl+"/subscribelist/"+id);

      }

    dessuscribirsePlan(numberPair: NumberPair){
        return this.post(this.resourceUrl+"/subscribe", JSON.stringify(numberPair));
    }

    createPlan(plan:Plan){
        return this.post(this.resourceUrl, JSON.stringify(plan));
    }



}
