package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.NumberString;
import com.eci.cosw.springbootsecureapi.model.UsuarioEntity;

import java.util.List;
import java.util.Optional;

/**
 * @author Santiago Carrillo
 * 8/21/17.
 */
public interface UserService
{
    List<UsuarioEntity> getAsistentes(Long idplan);

    UsuarioEntity registerUser(UsuarioEntity user);

    UsuarioEntity getUserById(int id);

    UsuarioEntity getUserByUsername(String username);

    UsuarioEntity getUserByEmail( String email );

    void updateUser(UsuarioEntity u);

    void setPreferenceUser (List<NumberString> preferenceUsuario);


}