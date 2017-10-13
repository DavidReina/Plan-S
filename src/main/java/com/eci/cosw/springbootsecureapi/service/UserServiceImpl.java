package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.User;
import com.eci.cosw.springbootsecureapi.model.UsuarioEntity;
import com.eci.cosw.springbootsecureapi.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
    public List<UsuarioEntity> getUsers() {
        return userRepo.findAll();
    }


    @Override
    public void registerUser(UsuarioEntity user) {
        userRepo.save(user);
    }

    @Override
    public UsuarioEntity getUser(String username) {
        return userRepo.getUsuarioByUsername(username);
    }

    @Override
    public void updateUser(UsuarioEntity u) {
        userRepo.save(u);
    }

    @Override
    public UsuarioEntity findUserByEmail(String email) {
        return userRepo.getUsuarioByEmail(email);
    }

    @Override
    public UsuarioEntity findUserByEmailAndPassword(String email, String password) {
        return userRepo.getUsuarioByEmailAndPass(email,password);
    }

}
