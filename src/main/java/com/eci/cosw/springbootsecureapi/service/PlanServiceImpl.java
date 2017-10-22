package com.eci.cosw.springbootsecureapi.service;

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
    public List<PlanEntity> getPlanNotUserList(Long userid) {
        return plans.getPlansByNotIdUser(userid);
    }

    @Override
    public void createPlan(PlanEntity plan) {
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

    @Override
    public List<PlanEntity> isSubscribed (Long id_usuario, Long id_plan){
        return plans.isSubscribedPlan(id_usuario,id_plan);
    }

    @Override
    public void subscribePlan(Long id_usuario, Long id_plan){
        plans.subscribePlan(id_usuario,id_plan);
    }

    @Override
    public List<PlanEntity> getUserSubscribeList(Long userid){
       return plans.subscribedPlans(userid);
    }

    @Override
    public void unsubscribePlan(Long id_usuario, Long id_plan){
        plans.unsubscribePlan(id_usuario,id_plan);
    }

    @Override
    public void updatePlan(PlanEntity plan){
        plans.updatePlan(plan.getIdPlan(),plan.getNombre(),plan.getDescripcion(),plan.getUbicacion(),plan.getFechaInicio(),plan.getFechaFinal(),plan.getCostoPromedio(),plan.getDetallePreferencia()
        ,plan.getImagenPlan());
    }

}

