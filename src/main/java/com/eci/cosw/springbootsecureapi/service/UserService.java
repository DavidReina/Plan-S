package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.User;
import com.eci.cosw.springbootsecureapi.model.UsuarioEntity;

import java.util.List;

/**
 * @author Santiago Carrillo
 * 8/21/17.
 */
public interface UserService
{
    List<UsuarioEntity> getUsers();

    void registerUser(UsuarioEntity user);

    UsuarioEntity getUser(String username );

    UsuarioEntity findUserByEmail( String email );

    void updateUser(UsuarioEntity u);

    UsuarioEntity findUserByEmailAndPassword( String email, String password );
}