package com.eci.cosw.springbootsecureapi.model;

import javax.persistence.*;

@Entity
@Table(name = "detalle_preferencia", schema = "bd2092964", catalog = "")
public class DetallePreferenciaEntity {
    private long idDetalle;
    private String nombre;
    private int preferencia;

    @Id
    @Column(name = "id_detalle")
    public long getIdDetalle() {
        return idDetalle;
    }

    public void setIdDetalle(long idDetalle) {
        this.idDetalle = idDetalle;
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
    @Column(name = "preferencia")
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

        DetallePreferenciaEntity that = (DetallePreferenciaEntity) o;

        if (idDetalle != that.idDetalle) return false;
        if (preferencia != that.preferencia) return false;
        if (nombre != null ? !nombre.equals(that.nombre) : that.nombre != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = (int) (idDetalle ^ (idDetalle >>> 32));
        result = 31 * result + (nombre != null ? nombre.hashCode() : 0);
        result = 31 * result + preferencia;
        return result;
    }
}
