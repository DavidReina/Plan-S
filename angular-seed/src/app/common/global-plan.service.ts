import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router, CanActivate } from '@angular/router';

import { AppConfiguration } from '../common/config/app-configuration.service';
import { Plan } from '../models/plan';

@Injectable()
export class GlobalPlanService {

    constructor(public plan: Plan) { }

    public setGlobalPlan(setplan: Plan) {
        this.plan.idPlan = setplan.idPlan;
        this.plan.costoPromedio = setplan.costoPromedio;
        this.plan.creadorPlan = setplan.creadorPlan;
        this.plan.descripcion = setplan.descripcion;
        this.plan.detallePreferencia = setplan.detallePreferencia;
        this.plan.fechaFinal = setplan.fechaFinal;
        this.plan.fechaInicio = setplan.fechaInicio;
        this.plan.nombre = setplan.nombre;
        this.plan.ubicacion = setplan.ubicacion;
    }

}