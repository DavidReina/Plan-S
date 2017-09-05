package com.eci.cosw.springbootsecureapi.model;

import java.util.Date;


public class Evento {

    private String nombre;
    private int id;
    private String creador;
    private String informacion;
    private Date fecha;
    private String lugar;
    private Usuario usuario;

    public Evento() {
    }

    public Evento(String nombre, int id,String creador, String informacion, Date fecha, String lugar, Usuario usuario) {

    this.setNombre(nombre);
    this.setId(id);
    this.setCreador(creador);
    this.setInformacion(informacion);
    this.setFecha(fecha);
    this.setLugar(lugar);
    this.setUsuario(usuario);

    }

    public String getCreador() {
        return creador;
    }

    public void setCreador(String creador) {
        this.creador = creador;
    }

    public String getInformacion() {
        return informacion;
    }

    public void setInformacion(String informacion) {
        this.informacion = informacion;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getLugar() {
        return lugar;
    }

    public void setLugar(String lugar) {
        this.lugar = lugar;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
