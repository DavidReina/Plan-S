import { Injectable } from '@angular/core';
import { Evento } from '../models/Evento';
import { APIService } from '../common/api.service';
import { Observable } from "rxjs/Observable";
import { Usuario } from "../models/Usuario";

@Injectable()
export class EventoService extends APIService{
  private resourceUrl = 'api/evento';

  
      create(value:string, value2:Number, value3: string, value4:string,value5:Date,value6:string,value7:Usuario):Observable<Evento>{
        return this.post(this.resourceUrl,new Evento(value,value2,value3,value4,value5,value6,value7));

      }
      
      list(): Observable<Evento[]> {
        return this.get(this.resourceUrl);
      }

}


