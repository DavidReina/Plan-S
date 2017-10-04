package com.eci.cosw.springbootsecureapi.model;

import javax.persistence.*;

@Entity
@Table(name = "Usuario_Preferencia", schema = "bd2092964", catalog = "")
public class UsuarioPreferenciaEntity {
    private int idUsuaruioPreferencia;
    private int preferencia;
    private int usuario;

    @Id
    @Column(name = "id_usuaruio_preferencia", nullable = false)
    public int getIdUsuaruioPreferencia() {
        return idUsuaruioPreferencia;
    }

    public void setIdUsuaruioPreferencia(int idUsuaruioPreferencia) {
        this.idUsuaruioPreferencia = idUsuaruioPreferencia;
    }

    @Basic
    @Column(name = "preferencia", nullable = false)
    public int getPreferencia() {
        return preferencia;
    }

    public void setPreferencia(int preferencia) {
        this.preferencia = preferencia;
    }

    @Basic
    @Column(name = "usuario", nullable = false)
    public int getUsuario() {
        return usuario;
    }

    public void setUsuario(int usuario) {
        this.usuario = usuario;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UsuarioPreferenciaEntity that = (UsuarioPreferenciaEntity) o;

        if (idUsuaruioPreferencia != that.idUsuaruioPreferencia) return false;
        if (preferencia != that.preferencia) return false;
        if (usuario != that.usuario) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idUsuaruioPreferencia;
        result = 31 * result + preferencia;
        result = 31 * result + usuario;
        return result;
    }
}
