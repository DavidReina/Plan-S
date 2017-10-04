package com.eci.cosw.springbootsecureapi.model;

import javax.persistence.*;

@Entity
@Table(name = "Preferencia", schema = "bd2092964", catalog = "")
public class PreferenciaEntity {
    private int idPreferencia;
    private int nombre;

    @Id
    @Column(name = "id_Preferencia", nullable = false)
    public int getIdPreferencia() {
        return idPreferencia;
    }

    public void setIdPreferencia(int idPreferencia) {
        this.idPreferencia = idPreferencia;
    }

    @Basic
    @Column(name = "nombre", nullable = false)
    public int getNombre() {
        return nombre;
    }

    public void setNombre(int nombre) {
        this.nombre = nombre;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PreferenciaEntity that = (PreferenciaEntity) o;

        if (idPreferencia != that.idPreferencia) return false;
        if (nombre != that.nombre) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idPreferencia;
        result = 31 * result + nombre;
        return result;
    }
}
