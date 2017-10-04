package com.eci.cosw.springbootsecureapi.model;

import javax.persistence.*;
import java.util.Arrays;

@Entity
@Table(name = "Usuario", schema = "bd2092964", catalog = "")
public class UsuarioEntity {
    private int idUsuario;
    private String email;
    private String contrasena;
    private String nombres;
    private String apellidos;
    private String username;
    private String tipoid;
    private byte[] fotoPerfil;

    @Id
    @Column(name = "id_usuario", nullable = false)
    public int getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

    @Basic
    @Column(name = "email", nullable = false, length = 100)
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Basic
    @Column(name = "contrasena", nullable = false, length = 16)
    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    @Basic
    @Column(name = "nombres", nullable = false, length = 100)
    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    @Basic
    @Column(name = "apellidos", nullable = false, length = 100)
    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    @Basic
    @Column(name = "username", nullable = false, length = 100)
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Basic
    @Column(name = "tipoid", nullable = false, length = 100)
    public String getTipoid() {
        return tipoid;
    }

    public void setTipoid(String tipoid) {
        this.tipoid = tipoid;
    }

    @Basic
    @Column(name = "foto_Perfil", nullable = false)
    public byte[] getFotoPerfil() {
        return fotoPerfil;
    }

    public void setFotoPerfil(byte[] fotoPerfil) {
        this.fotoPerfil = fotoPerfil;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UsuarioEntity that = (UsuarioEntity) o;

        if (idUsuario != that.idUsuario) return false;
        if (email != null ? !email.equals(that.email) : that.email != null) return false;
        if (contrasena != null ? !contrasena.equals(that.contrasena) : that.contrasena != null) return false;
        if (nombres != null ? !nombres.equals(that.nombres) : that.nombres != null) return false;
        if (apellidos != null ? !apellidos.equals(that.apellidos) : that.apellidos != null) return false;
        if (username != null ? !username.equals(that.username) : that.username != null) return false;
        if (tipoid != null ? !tipoid.equals(that.tipoid) : that.tipoid != null) return false;
        if (!Arrays.equals(fotoPerfil, that.fotoPerfil)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idUsuario;
        result = 31 * result + (email != null ? email.hashCode() : 0);
        result = 31 * result + (contrasena != null ? contrasena.hashCode() : 0);
        result = 31 * result + (nombres != null ? nombres.hashCode() : 0);
        result = 31 * result + (apellidos != null ? apellidos.hashCode() : 0);
        result = 31 * result + (username != null ? username.hashCode() : 0);
        result = 31 * result + (tipoid != null ? tipoid.hashCode() : 0);
        result = 31 * result + Arrays.hashCode(fotoPerfil);
        return result;
    }
}
