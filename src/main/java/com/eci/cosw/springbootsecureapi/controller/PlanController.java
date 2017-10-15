package com.eci.cosw.springbootsecureapi.controller;

import com.eci.cosw.springbootsecureapi.model.Plan;
import com.eci.cosw.springbootsecureapi.model.PlanEntity;
import com.eci.cosw.springbootsecureapi.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping( "plan" )
public class PlanController {
    @Autowired
    private PlanService planService;

    @RequestMapping( value = "/plans", method = RequestMethod.GET )
    public List<PlanEntity> getPlan(){
        return planService.getPlanList();
    }

    @RequestMapping( value = "/plans", method = RequestMethod.POST )
    public void setPlan(@RequestBody PlanEntity plan){
        planService.addPlan(plan);
    }



}
