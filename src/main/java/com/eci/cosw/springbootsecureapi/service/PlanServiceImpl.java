package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.Plan;
import com.eci.cosw.springbootsecureapi.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Service
public class PlanServiceImpl implements PlanService {

    private List<Plan> plans =new ArrayList<Plan>();

    @Autowired
    public PlanServiceImpl(){
        
    }

    @PostConstruct
    private void populateSampleData() {

        String[] Amigos = new String[]{"Ludwing", "David", "Georgio", "Carlos"};

        plans.add(new Plan("estreno pelicula IT","Me gustan las peliculas de terror, ¿como no ver el remake de este gran clasico?","Cinecolombia, CC Santafé",
                "19-Septiembre-2017","8.000", Amigos ));
    }

    @Override
    public List<Plan> getPlanList() {
        return plans;
    }

    @Override
    public Plan addPlan(Plan plan) {
        plans.add(plan);
        return plans.get(plans.size()-1);
    }

    @Override
    public Plan RegisterPlan(Plan plan) {
        plans.add(plan);
        return plans.get(plans.size()-1);
    }


}

