package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.Plan;
import com.eci.cosw.springbootsecureapi.model.PlanEntity;

import java.util.List;

public interface PlanService {

    List<PlanEntity> getPlanList();

    void addPlan(PlanEntity plan);

    PlanEntity getPlanByName (String nombre);

}
