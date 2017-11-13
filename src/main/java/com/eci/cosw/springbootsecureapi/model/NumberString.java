package com.eci.cosw.springbootsecureapi.model;

import java.util.List;

public class NumberString {

    private long num;
    private List<String> str;

    public void setNumber(Long idPlan) {
        this.num = idPlan;
    }

    public void setStr(List<String> idUser) {this.str = idUser;}

    public long getNumber(){return this.num;}

    public List<String> getStr(){
        return this.str;
    }

}
