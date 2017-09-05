package com.eci.cosw.springbootsecureapi.model;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

public class Usuario implements List<Usuario> {
    private String nombre;
    private String apellido;
    private int edad;
    private String TI;
    private int identificacion;
    private String ciudad;
    private String mail;
    private String password;

    public Usuario(String nombre, String apellido, int edad, String TI, int identificacion, String ciudad, String mail, String password) {
        this.setNombre(nombre) ;
        this.setApellido(apellido);
        this.setEdad(edad);
        this.setTI(TI);
        this.setIdentificacion(identificacion);
        this.setCiudad(ciudad);
        this.setMail(mail);
        this.setPassword(password);
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getTI() {
        return TI;
    }

    public void setTI(String TI) {
        this.TI = TI;
    }

    public int getIdentificacion() {
        return identificacion;
    }

    public void setIdentificacion(int identificacion) {
        this.identificacion = identificacion;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = this.password;
    }

    @Override
    public int size() {
        return 0;
    }

    @Override
    public boolean isEmpty() {
        return false;
    }

    @Override
    public boolean contains(Object o) {
        return false;
    }

    @Override
    public Iterator<Usuario> iterator() {
        return null;
    }

    @Override
    public Object[] toArray() {
        return new Object[0];
    }

    @Override
    public <T> T[] toArray(T[] a) {
        return null;
    }

    @Override
    public boolean add(Usuario usuario) {
        return false;
    }

    @Override
    public boolean remove(Object o) {
        return false;
    }

    @Override
    public boolean containsAll(Collection<?> c) {
        return false;
    }

    @Override
    public boolean addAll(Collection<? extends Usuario> c) {
        return false;
    }

    @Override
    public boolean addAll(int index, Collection<? extends Usuario> c) {
        return false;
    }

    @Override
    public boolean removeAll(Collection<?> c) {
        return false;
    }

    @Override
    public boolean retainAll(Collection<?> c) {
        return false;
    }

    @Override
    public void clear() {

    }

    @Override
    public Usuario get(int index) {
        return null;
    }

    @Override
    public Usuario set(int index, Usuario element) {
        return null;
    }

    @Override
    public void add(int index, Usuario element) {

    }

    @Override
    public Usuario remove(int index) {
        return null;
    }

    @Override
    public int indexOf(Object o) {
        return 0;
    }

    @Override
    public int lastIndexOf(Object o) {
        return 0;
    }

    @Override
    public ListIterator<Usuario> listIterator() {
        return null;
    }

    @Override
    public ListIterator<Usuario> listIterator(int index) {
        return null;
    }

    @Override
    public List<Usuario> subList(int fromIndex, int toIndex) {
        return null;
    }
}
