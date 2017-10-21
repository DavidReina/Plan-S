package com.eci.cosw.springbootsecureapi.model;

public class NumberPair {
    private long idUser;
    private long idPlan;

    public void setIdPlan(Long idPlan) {
        this.idPlan = idPlan;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    public long getIdUser(){
        return this.idUser;
    }

    public long getIdPlan(){
        return this.idPlan;
    }
}
