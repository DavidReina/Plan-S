package com.eci.cosw.springbootsecureapi.model;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "plan_asistente", schema = "bd2092964", catalog = "")
@IdClass(PlanAsistenteEntityPK.class)
public class PlanAsistenteEntity {
    private int planId;
    private int usuarioId;

    @Id
    @Column(name = "plan_Id")
    @GeneratedValue(strategy = IDENTITY)
    public int getPlanId() {
        return planId;
    }

    public void setPlanId(int planId) {
        this.planId = planId;
    }

    @Id
    @Column(name = "usuario_id")
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

        PlanAsistenteEntity that = (PlanAsistenteEntity) o;

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
