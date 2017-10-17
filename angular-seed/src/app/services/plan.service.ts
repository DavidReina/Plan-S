import { Plan } from '../models/plan';
import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { Observable } from "rxjs/Observable";

@Injectable()
export class PlanService extends APIService{
  private resourceUrl = 'plan/plans';
  
      /*create(nombre:string,descripcion:string,ubicacion:string,fecha:string,costo:number):Observable<Plan>{
        return this.post(this.resourceUrl,new Plan(nombre,descripcion,ubicacion,fecha,costo));

      }*/
      
      list(): Observable<Plan[]> {
        return this.get(this.resourceUrl);
      }

}
