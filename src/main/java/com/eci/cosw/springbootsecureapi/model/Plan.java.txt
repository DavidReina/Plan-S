package com.eci.cosw.springbootsecureapi.model;

import java.util.ArrayList;

public class Plan {
    private String Nombre;
    private String descripcion;
    private String Ubicacion;
    private String Fecha;
    private String CostoPromedio;
    private ArrayList<String> UsuariosAdjuntos;

    public Plan(){

    }

    public Plan(String nombre, String descripcion, String ubicacion, String fecha, String costoPromedio, ArrayList<String> usuariosAdjuntos) {
        Nombre = nombre;
        this.descripcion = descripcion;
        Ubicacion = ubicacion;
        Fecha = fecha;
        CostoPromedio = costoPromedio;
        UsuariosAdjuntos = usuariosAdjuntos;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUbicacion() {
        return Ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        Ubicacion = ubicacion;
    }

    public String getFecha() {
        return Fecha;
    }

    public void setFecha(String fecha) {
        Fecha = fecha;
    }

    public String getCostoPromedio() {
        return CostoPromedio;
    }

    public void setCostoPromedio(String costoPromedio) {
        CostoPromedio = costoPromedio;
    }

    public ArrayList<String> getUsuariosAdjuntos() {
        return UsuariosAdjuntos;
    }

    public void setUsuariosAdjuntos(ArrayList<String> usuariosAdjuntos) {
        UsuariosAdjuntos = usuariosAdjuntos;
    }
}