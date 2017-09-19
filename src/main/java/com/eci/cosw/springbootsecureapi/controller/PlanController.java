package com.eci.cosw.springbootsecureapi.controller;

import com.eci.cosw.springbootsecureapi.model.Plan;
import com.eci.cosw.springbootsecureapi.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping( "api" )
public class PlanController {
    @Autowired
    private PlanService planService;

    @RequestMapping( value = "/plan", method = RequestMethod.GET )
    public List<Plan> getPlan(){
        return planService.getPlanList();

    }

    @RequestMapping( value = "/plan", method = RequestMethod.POST )
    public Plan setPlan(@RequestBody Plan plan){
        return planService.addPlan(plan);
    }



}
