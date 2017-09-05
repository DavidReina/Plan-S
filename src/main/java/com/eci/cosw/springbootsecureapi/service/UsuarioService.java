package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.Evento;
import com.eci.cosw.springbootsecureapi.model.Usuario;

import java.util.List;

public interface UsuarioService {
    List<Usuario> getUsers();

    Usuario getUsuario( long mail );

    Usuario registerUser( Usuario usuario );

    Usuario createUser(Usuario usuario);


}
