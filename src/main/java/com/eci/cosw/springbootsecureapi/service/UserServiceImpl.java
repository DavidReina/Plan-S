package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.UsuarioEntity;
import com.eci.cosw.springbootsecureapi.reposotories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;


/**
 * @author Santiago Carrillo
 * 8/21/17.
 */
@Service
public class UserServiceImpl implements UserService {


    @Autowired
    private UsuarioRepository userRepo;


    @Override
    public List<UsuarioEntity> getAsistentes(Long idPlan) {
        return userRepo.asistentesPlan(idPlan);
    }


    @Override
    public UsuarioEntity registerUser(UsuarioEntity user) {
        int registros = userRepo.numeroRegistros()+1;
        userRepo.registrarUsuario(registros, user.getApellidos(),user.getContrasena(),user.getEmail(),user.getNombres(),user.getNumeroId(),user.getTipoId(),user.getUsuario());
        user.setIdUsuario(registros);
        return user;
    }

    @Override
    public UsuarioEntity getUserById(int id) {

            UsuarioEntity usuario = userRepo.getUsuarioById(id);
            System.out.println(usuario.getEmail());
            return usuario;

    }

    @Override
    public UsuarioEntity getUserByUsername(String username) {
        return userRepo.getUsuarioByUsername(username);
    }

    @Override
    public void updateUser(UsuarioEntity user) {
        userRepo.updateUser(user.getIdUsuario(),user.getApellidos(),user.getContrasena(),user.getEmail(),user.getNombres(),user.getNumeroId(),user.getTipoId(),user.getUsuario());
    }

    @Override
    public UsuarioEntity getUserByEmail(String email) {
        return userRepo.getUsuarioByEmail(email);
    }


    @Override
    public void setPreferenceUser(Long id, List<String> preferencia) {
        for(int i=0; i<preferencia.size(); i++){
            userRepo.setPreferenceUser(id,preferencia.get(i));
        }
    }

}
