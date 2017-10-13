package com.eci.cosw.springbootsecureapi.controller;

import com.eci.cosw.springbootsecureapi.model.User;
import com.eci.cosw.springbootsecureapi.model.UsuarioEntity;
import com.eci.cosw.springbootsecureapi.service.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;


import javax.servlet.ServletException;
import java.util.Date;
import java.util.List;



/**
 * @author Plan s
 * 8/21/17.
 */
@RestController
@RequestMapping( "user" )
public class UserController
{

    @Autowired
    private UserService userService;

    @RequestMapping( value = "/login", method = RequestMethod.POST )
    public Token login( @RequestBody User login )
        throws ServletException
    {

        String jwtToken = "";

        if ( login.getUsername() == null || login.getPassword() == null )
        {
            throw new ServletException( "Please fill in username and password" );
        }

        String username = login.getUsername();
        String password = login.getPassword();
        System.out.println(username+"------"+ password);
        UsuarioEntity user = userService.getUser(username);
        System.out.println(user.getUsuario()+"---:::::::::::::::---");

        if ( user == null )
        {
            throw new ServletException( "User username not found." );
        }

        String pwd = user.getContrasena();

        if ( !password.equals( pwd ) )
        {
            throw new ServletException( "Invalid login. Please check your name and password." );

        }

        jwtToken = Jwts.builder().setSubject( username ).claim( "roles", "user" ).setIssuedAt( new Date() ).signWith(
            SignatureAlgorithm.HS256, "secretkey" ).compact();

        return new Token( jwtToken );
    }

    @RequestMapping( value = "/users", method = RequestMethod.GET )
    @ResponseBody
    public ResponseEntity<List<UsuarioEntity> > getUsers(){
        List<UsuarioEntity> listaUsuarioEntities = userService.getUsers();
        return new ResponseEntity<List<UsuarioEntity>>(listaUsuarioEntities,HttpStatus.OK);
    }

    @RequestMapping( value = "/users", method = RequestMethod.POST )
    public ResponseEntity<UsuarioEntity> setUser(@RequestBody UsuarioEntity user){
            userService.registerUser(user);
             return new ResponseEntity<UsuarioEntity>(HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/update ")
    public ResponseEntity<?> updatePerson(@RequestBody UsuarioEntity user) {
        userService.registerUser(user);
        return new ResponseEntity<UsuarioEntity>(HttpStatus.CREATED);
    }

    public class Token
    {

        String access_token;


        public Token( String access_token )
        {
            this.access_token = access_token;
        }


        public String getAccessToken()
        {
            return access_token;
        }

        public void setAccessToken( String access_token )
        {
            this.access_token = access_token;
        }
    }

}
