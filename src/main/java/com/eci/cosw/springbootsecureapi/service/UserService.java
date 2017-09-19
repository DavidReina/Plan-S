package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.User;

import java.util.List;

/**
 * @author Santiago Carrillo
 * 8/21/17.
 */
public interface UserService
{
    List<User> getUsers();

    User registerUser(User user);

    User getUser(String username );

    User createUser( User user );

    User findUserByEmail( String email );

    User findUserByEmailAndPassword( String email, String password );
}