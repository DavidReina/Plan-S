package com.eci.cosw.springbootsecureapi.model;

import javax.persistence.*;

@Entity
@Table(name = "Usuario_Plan", schema = "bd2092964", catalog = "")
public class UsuarioPlanEntity {
    private int idUsuarioPlan;
    private int planId;
    private int usuarioId;

    @Id
    @Column(name = "id_usuario_plan", nullable = false)
    public int getIdUsuarioPlan() {
        return idUsuarioPlan;
    }

    public void setIdUsuarioPlan(int idUsuarioPlan) {
        this.idUsuarioPlan = idUsuarioPlan;
    }

    @Basic
    @Column(name = "plan_id", nullable = false)
    public int getPlanId() {
        return planId;
    }

    public void setPlanId(int planId) {
        this.planId = planId;
    }

    @Basic
    @Column(name = "usuario_id", nullable = false)
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

        UsuarioPlanEntity that = (UsuarioPlanEntity) o;

        if (idUsuarioPlan != that.idUsuarioPlan) return false;
        if (planId != that.planId) return false;
        if (usuarioId != that.usuarioId) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idUsuarioPlan;
        result = 31 * result + planId;
        result = 31 * result + usuarioId;
        return result;
    }
}
