package com.eci.cosw.springbootsecureapi.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.security.Principal;

@RestController
public class UsuarioController {

    @RequestMapping(value = "/app/user")
    public Principal user(Principal user) {
        return user;
    }
    @RequestMapping(value = "/logout", method = RequestMethod.POST)
    public ResponseEntity<?> logout(Principal user) {
        return new ResponseEntity<Object>(HttpStatus.ACCEPTED);
    }
    }
