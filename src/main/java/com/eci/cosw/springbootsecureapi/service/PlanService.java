package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.Plan;

import java.util.List;

public interface PlanService {
    List<Plan> getPlanList();
    Plan addPlan(Plan plan);
    Plan RegisterPlan (Plan plan);
}
