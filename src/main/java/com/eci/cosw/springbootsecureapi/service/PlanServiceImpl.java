package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.PlanEntity;
import com.eci.cosw.springbootsecureapi.model.PreferenciaEntity;
import com.eci.cosw.springbootsecureapi.reposotories.PlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
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

    public List<PlanEntity> searchPlan(String planname, Long iduser){
        return plans.getPlanByname(planname, iduser);
    }

    public List<PreferenciaEntity> getPreferencias(){

        List<PreferenciaEntity> listaPref = new ArrayList<PreferenciaEntity>();
        List<Object[]> objs= plans.getPreferencias();

        for(int i=0;i<objs.size();i++){
            PreferenciaEntity pe = new PreferenciaEntity();
            String bi = objs.get(i)[0].toString();
            pe.setIdPreferencia(Long.valueOf(bi).longValue());
            pe.setNombre(objs.get(i)[1].toString());
            listaPref.add(pe);
        }

        return listaPref;
    }

    public PreferenciaEntity getPreferenciasById (Long id){

        PreferenciaEntity pe = new PreferenciaEntity();
        List<Object[]> objs= plans.getPreferenciasById(id);
        String bi = objs.get(0)[0].toString();
        System.out.println(objs.get(0)[1]);
        pe.setIdPreferencia(Long.valueOf(bi).longValue());
        pe.setNombre(objs.get(0)[1].toString());
        return pe;
    }

}

