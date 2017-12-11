package com.eci.cosw.springbootsecureapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Blob;
import java.sql.Timestamp;
import java.util.Arrays;

@Entity
@Table(name = "plan", schema = "bd2092964", catalog = "")
public class PlanEntity {
    private long idPlan;
    private String nombre;
    private String descripcion;
    private String ubicacion;
    private Timestamp fechaInicio;
    private Timestamp fechaFinal;
    private int costoPromedio;
    private int creadorPlan;
    private int detallePreferencia;
    private String imagenPlan;

    @Id
    @Column(name = "id_plan")
    public long getIdPlan() {
        return idPlan;
    }

    public void setIdPlan(long idPlan) {
        this.idPlan = idPlan;
    }

    @Basic
    @Column(name = "nombre")
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Basic
    @Column(name = "descripcion")
    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @Basic
    @Column(name = "ubicacion")
    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    @Basic
    @Column(name = "fecha_inicio")
    public Timestamp getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Timestamp fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    @Basic
    @Column(name = "fecha_final")
    public Timestamp getFechaFinal() {
        return fechaFinal;
    }

    public void setFechaFinal(Timestamp fechaFinal) {
        this.fechaFinal = fechaFinal;
    }

    @Basic
    @Column(name = "costo_promedio")
    public int getCostoPromedio() {
        return costoPromedio;
    }

    public void setCostoPromedio(int costoPromedio) {
        this.costoPromedio = costoPromedio;
    }

    @Basic
    @Column(name = "creador_plan")
    public int getCreadorPlan() {
        return creadorPlan;
    }

    public void setCreadorPlan(int creadorPlan) {
        this.creadorPlan = creadorPlan;
    }

    @Basic
    @Column(name = "detalle_preferencia")
    public int getDetallePreferencia() {
        return detallePreferencia;
    }

    public void setDetallePreferencia(int detallePreferencia) {
        this.detallePreferencia = detallePreferencia;
    }

    @Basic
    @Column(name = "imagen_plan")
    public String getImagenPlan() {
        return imagenPlan;
    }

    public void setImagenPlan(String imagenPlan) {
        this.imagenPlan = imagenPlan;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PlanEntity that = (PlanEntity) o;

        if (idPlan != that.idPlan) return false;
        if (costoPromedio != that.costoPromedio) return false;
        if (creadorPlan != that.creadorPlan) return false;
        if (detallePreferencia != that.detallePreferencia) return false;
        if (nombre != null ? !nombre.equals(that.nombre) : that.nombre != null) return false;
        if (descripcion != null ? !descripcion.equals(that.descripcion) : that.descripcion != null) return false;
        if (ubicacion != null ? !ubicacion.equals(that.ubicacion) : that.ubicacion != null) return false;
        if (fechaInicio != null ? !fechaInicio.equals(that.fechaInicio) : that.fechaInicio != null) return false;
        return fechaFinal != null ? fechaFinal.equals(that.fechaFinal) : that.fechaFinal == null;
    }

    @Override
    public int hashCode() {
        int result = (int) (idPlan ^ (idPlan >>> 32));
        result = 31 * result + (nombre != null ? nombre.hashCode() : 0);
        result = 31 * result + (descripcion != null ? descripcion.hashCode() : 0);
        result = 31 * result + (ubicacion != null ? ubicacion.hashCode() : 0);
        result = 31 * result + (fechaInicio != null ? fechaInicio.hashCode() : 0);
        result = 31 * result + (fechaFinal != null ? fechaFinal.hashCode() : 0);
        result = 31 * result + costoPromedio;
        result = 31 * result + creadorPlan;
        result = 31 * result + detallePreferencia;
        return result;
    }
}
