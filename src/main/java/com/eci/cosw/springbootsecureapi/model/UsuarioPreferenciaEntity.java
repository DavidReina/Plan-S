package com.eci.cosw.springbootsecureapi.model;

import javax.persistence.*;

@Entity
@Table(name = "usuario_preferencia", schema = "bd2092964", catalog = "")
public class UsuarioPreferenciaEntity {
    private int usuario;
    private int detallePreferencia;

    @Id
    @Column(name = "usuario")
    public int getUsuario() {
        return usuario;
    }

    public void setUsuario(int usuario) {
        this.usuario = usuario;
    }

    @Basic
    @Column(name = "detalle_preferencia")
    public int getDetallePreferencia() {
        return detallePreferencia;
    }

    public void setDetallePreferencia(int detallePreferencia) {
        this.detallePreferencia = detallePreferencia;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UsuarioPreferenciaEntity that = (UsuarioPreferenciaEntity) o;

        if (usuario != that.usuario) return false;
        if (detallePreferencia != that.detallePreferencia) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = usuario;
        result = 31 * result + detallePreferencia;
        return result;
    }
}
