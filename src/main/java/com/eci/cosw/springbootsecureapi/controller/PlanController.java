package com.eci.cosw.springbootsecureapi.controller;

import com.eci.cosw.springbootsecureapi.model.NumberPair;
import com.eci.cosw.springbootsecureapi.model.PlanEntity;
import com.eci.cosw.springbootsecureapi.model.PreferenciaEntity;
import com.eci.cosw.springbootsecureapi.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping( "plan" )
public class PlanController {
    @Autowired
    private PlanService planService;

    @RequestMapping( value = "/plans/notuser/{id}", method = RequestMethod.GET )
    public List<PlanEntity> getPlanNotUser(@PathVariable("id") Long id){
        if(id==0){
            return new ArrayList<PlanEntity>();
        }
        else{
            return planService.getPlanNotUserList(id);
        }

    }

    @RequestMapping( value = "/plans", method = RequestMethod.POST )
    public ResponseEntity<PlanEntity> setPlan(@RequestBody PlanEntity plan){
        System.out.println("Fecha inicio: "+plan.getFechaInicio());
        planService.createPlan(plan);
        return new ResponseEntity<PlanEntity>(plan, HttpStatus.OK);
    }

    @RequestMapping( value = "/plans/{id}", method = RequestMethod.GET )
    public List<PlanEntity> getPlan(@PathVariable("id") Long id){
        return planService.getUserPlanList(id);
    }

    @RequestMapping( value = "/plans/subscribe", method = RequestMethod.POST )
    public ResponseEntity<NumberPair> subscribePlan(@RequestBody NumberPair pair){
        System.out.println("id ususario: "+pair.getIdUser()+" id plan: "+ pair.getIdPlan());
        planService.subscribePlan(pair.getIdUser(),pair.getIdPlan());
        return new ResponseEntity<NumberPair>(pair, HttpStatus.OK);
    }

    @RequestMapping( value = "/plans/subscribelist/{id}", method = RequestMethod.GET )
    public List<PlanEntity> getUserSubscribedList(@PathVariable("id") Long id){
        return planService.getUserSubscribeList(id);
    }

    @RequestMapping( value = "/plans/unsubscribe", method = RequestMethod.POST )
    public ResponseEntity<NumberPair> unsubscribePlan(@RequestBody NumberPair pair){
        System.out.println("id ususario: "+pair.getIdUser()+" id plan: "+ pair.getIdPlan());
        planService.unsubscribePlan(pair.getIdUser(),pair.getIdPlan());
        return new ResponseEntity<NumberPair>(pair, HttpStatus.OK);
    }

    @RequestMapping( value = "/plans/update", method = RequestMethod.POST )
    public ResponseEntity<PlanEntity> updatePlan(@RequestBody PlanEntity plan){
        //System.out.println("id ususario: "+pair.getIdUser()+" id plan: "+ pair.getIdPlan());
        planService.updatePlan(plan);
        System.out.println("fecha inicial update: "+plan.getFechaInicio());
        return new ResponseEntity<PlanEntity>(plan, HttpStatus.OK);
    }

    @RequestMapping( value = "/plans/search/{planname}/{iduser}", method = RequestMethod.GET )
    public List<PlanEntity> getSearchPlanList(@PathVariable("planname") String planname, @PathVariable("iduser") Long iduser){
        return planService.searchPlan(planname,iduser);
    }

    @RequestMapping( value = "/plans/preferences", method = RequestMethod.GET )
    public List<PreferenciaEntity> getPreferencias(){

        return planService.getPreferencias();

    }

    @RequestMapping( value = "/plans/preferences/{id}", method = RequestMethod.GET )
    public PreferenciaEntity getPreferenciasById(@PathVariable("id") Long id){

        return planService.getPreferenciasById(id);

    }

}
