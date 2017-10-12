package com.eci.cosw.springbootsecureapi.model;

import javax.persistence.*;

@Entity
@Table(name = "preferencia", schema = "bd2092964", catalog = "")
public class PreferenciaEntity {
    private long idPreferencia;
    private String nombre;

    @Id
    @Column(name = "id_preferencia")
    public long getIdPreferencia() {
        return idPreferencia;
    }

    public void setIdPreferencia(long idPreferencia) {
        this.idPreferencia = idPreferencia;
    }

    @Basic
    @Column(name = "nombre")
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PreferenciaEntity that = (PreferenciaEntity) o;

        if (idPreferencia != that.idPreferencia) return false;
        if (nombre != null ? !nombre.equals(that.nombre) : that.nombre != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = (int) (idPreferencia ^ (idPreferencia >>> 32));
        result = 31 * result + (nombre != null ? nombre.hashCode() : 0);
        return result;
    }
}
