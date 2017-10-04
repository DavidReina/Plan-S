package com.eci.cosw.springbootsecureapi.model;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Arrays;

@Entity
@Table(name = "Plan", schema = "bd2092964", catalog = "")
public class PlanEntity {
    private int idPlan;
    private String descripcion;
    private String ubicacion;
    private Timestamp fechaInicio;
    private Timestamp fechaFinal;
    private int costoPromedio;
    private byte[] imagenPlan;
    private int preferencia;

    @Id
    @Column(name = "id_plan", nullable = false)
    public int getIdPlan() {
        return idPlan;
    }

    public void setIdPlan(int idPlan) {
        this.idPlan = idPlan;
    }

    @Basic
    @Column(name = "descripcion", nullable = false, length = 100)
    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @Basic
    @Column(name = "ubicacion", nullable = false, length = 100)
    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    @Basic
    @Column(name = "fecha_inicio", nullable = false)
    public Timestamp getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Timestamp fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    @Basic
    @Column(name = "fecha_final", nullable = false)
    public Timestamp getFechaFinal() {
        return fechaFinal;
    }

    public void setFechaFinal(Timestamp fechaFinal) {
        this.fechaFinal = fechaFinal;
    }

    @Basic
    @Column(name = "costo_Promedio", nullable = false)
    public int getCostoPromedio() {
        return costoPromedio;
    }

    public void setCostoPromedio(int costoPromedio) {
        this.costoPromedio = costoPromedio;
    }

    @Basic
    @Column(name = "imagen_Plan", nullable = false)
    public byte[] getImagenPlan() {
        return imagenPlan;
    }

    public void setImagenPlan(byte[] imagenPlan) {
        this.imagenPlan = imagenPlan;
    }

    @Basic
    @Column(name = "preferencia", nullable = false)
    public int getPreferencia() {
        return preferencia;
    }

    public void setPreferencia(int preferencia) {
        this.preferencia = preferencia;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PlanEntity that = (PlanEntity) o;

        if (idPlan != that.idPlan) return false;
        if (costoPromedio != that.costoPromedio) return false;
        if (preferencia != that.preferencia) return false;
        if (descripcion != null ? !descripcion.equals(that.descripcion) : that.descripcion != null) return false;
        if (ubicacion != null ? !ubicacion.equals(that.ubicacion) : that.ubicacion != null) return false;
        if (fechaInicio != null ? !fechaInicio.equals(that.fechaInicio) : that.fechaInicio != null) return false;
        if (fechaFinal != null ? !fechaFinal.equals(that.fechaFinal) : that.fechaFinal != null) return false;
        if (!Arrays.equals(imagenPlan, that.imagenPlan)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idPlan;
        result = 31 * result + (descripcion != null ? descripcion.hashCode() : 0);
        result = 31 * result + (ubicacion != null ? ubicacion.hashCode() : 0);
        result = 31 * result + (fechaInicio != null ? fechaInicio.hashCode() : 0);
        result = 31 * result + (fechaFinal != null ? fechaFinal.hashCode() : 0);
        result = 31 * result + costoPromedio;
        result = 31 * result + Arrays.hashCode(imagenPlan);
        result = 31 * result + preferencia;
        return result;
    }
}
