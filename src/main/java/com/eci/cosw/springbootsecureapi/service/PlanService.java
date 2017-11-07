package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.PlanEntity;
import com.eci.cosw.springbootsecureapi.model.PreferenciaEntity;

import java.util.List;

public interface PlanService {

    List<PlanEntity> getPlanNotUserList(Long userid);

    List<PlanEntity> getUserPlanList(Long userid);

    List<PlanEntity> getUserSubscribeList(Long userid);

    void createPlan(PlanEntity plan);

    List<PlanEntity> isSubscribed (Long id_usuario, Long id_plan);

    void subscribePlan(Long id_usuario, Long id_plan);

    void unsubscribePlan(Long id_usuario, Long id_plan);

    void updatePlan(PlanEntity plan);

    List<PlanEntity> searchPlan(String planname, Long iduser);

    List<PreferenciaEntity> getPreferencias ();



}
