package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.PlanEntity;

import java.util.List;

public interface PlanService {

    List<PlanEntity> getPlanNotUserList(Long userid);

    List<PlanEntity> getUserPlanList(Long userid);

    List<PlanEntity> getUserSubscribeList(Long userid);

    void createPlan(PlanEntity plan);

    PlanEntity getPlanByName (String nombre);

    List<PlanEntity> isSubscribed (Long id_usuario, Long id_plan);

    void subscribePlan(Long id_usuario, Long id_plan);

    void unsubscribePlan(Long id_usuario, Long id_plan);


}
