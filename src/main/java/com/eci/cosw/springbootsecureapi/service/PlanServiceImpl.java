package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.Plan;
import com.eci.cosw.springbootsecureapi.model.PlanEntity;
import com.eci.cosw.springbootsecureapi.reposotories.PlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlanServiceImpl implements PlanService {

    @Autowired
    private PlanRepository plans;

    @Override
    public List<PlanEntity> getPlanList() {
        return plans.findAll();
    }

    @Override
    public void addPlan(PlanEntity plan) {
        plans.save(plan);
    }

    @Override
    public PlanEntity getPlanByName(String nombre) {
        return plans.getPlanByname(nombre);
    }

    @Override
    public List<PlanEntity> getUserPlanList(Long userid) {
        return plans.getPlansByIdUser(userid);
    }

}

