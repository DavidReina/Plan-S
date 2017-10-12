package com.eci.cosw.springbootsecureapi.model;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;

public class PlanAsistenteEntityPK implements Serializable {
    private int planId;
    private int usuarioId;

    @Column(name = "plan_Id")
    @Id
    public int getPlanId() {
        return planId;
    }

    public void setPlanId(int planId) {
        this.planId = planId;
    }

    @Column(name = "usuario_id")
    @Id
    public int getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(int usuarioId) {
        this.usuarioId = usuarioId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PlanAsistenteEntityPK that = (PlanAsistenteEntityPK) o;

        if (planId != that.planId) return false;
        if (usuarioId != that.usuarioId) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = planId;
        result = 31 * result + usuarioId;
        return result;
    }
}
