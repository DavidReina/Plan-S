package com.eci.cosw.springbootsecureapi.model;

public class NumberString {

    private long num;
    private String str;

    public void setNumber(Long idPlan) {
        this.num = idPlan;
    }

    public void setStr(String idUser) {this.str = idUser;}

    public long getNumber(){return this.num;}

    public String getStr(){
        return this.str;
    }

}
