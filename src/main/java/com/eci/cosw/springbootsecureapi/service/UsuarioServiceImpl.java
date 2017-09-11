package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.Evento;
import com.eci.cosw.springbootsecureapi.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
@Service
public class UsuarioServiceImpl implements UsuarioService {

    private List<Usuario> users = new ArrayList<>();

    @Autowired
    public UsuarioServiceImpl()
    {
    }

    @PostConstruct
    private void populateSampleData()
    {
        users.add( new Usuario( "Arturo ", "Acevedo", 4, "CC", 4,
                "Bogota" ,"mail","ludwing") );
    }


    @Override
    public List<Usuario> getUsers() {
        return  users;
    }

    @Override
    public Usuario getUsuario(long mail) {
        return users. get(0);
    }

    @Override
    public Usuario registerUser(Usuario usuario) {
        users.add(usuario);
        return users.get( users.size()-1 );
    }
    @Override
    public Usuario createUser( Usuario usuario )
    {
        users.add(usuario);
        return users.get( users.size()-1 );
    }


}
