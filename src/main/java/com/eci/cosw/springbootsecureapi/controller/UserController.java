package com.eci.cosw.springbootsecureapi.controller;

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
import java.util.Optional;


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
    public Token login( @RequestBody UsuarioEntity login )
        throws ServletException
    {
        String jwtToken = "";
        System.out.println(login.getContrasena()+"-------++++++++++++------------"+login.getEmail());
        if ( login.getEmail() == null || login.getContrasena() == null )
        {
            throw new ServletException( "Please fill in username and password" );
        }

        String username = login.getEmail();
        String password = login.getContrasena();

        UsuarioEntity user = userService.getUserByEmail(username);

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

    @RequestMapping( value = "/users/{id}", method = RequestMethod.GET )
    @ResponseBody
    public ResponseEntity<UsuarioEntity> getUser(@PathVariable("id") Integer id){

        UsuarioEntity usuario = userService.getUserById(id);

        if(usuario == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<UsuarioEntity>(usuario,HttpStatus.OK);

    }

    @RequestMapping( value = "/users", method = RequestMethod.POST )
    public ResponseEntity<UsuarioEntity> setUser(@RequestBody UsuarioEntity user){
            System.out.println(user.getNombres());
            userService.registerUser(user);
            return new ResponseEntity<UsuarioEntity>(user,HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/users/update")
    public ResponseEntity<UsuarioEntity> updateUser(@RequestBody UsuarioEntity user) {
        System.out.println("Update id: "+user.getIdUsuario());
        userService.updateUser(user);
        return new ResponseEntity<UsuarioEntity>(user,HttpStatus.OK);
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

    @RequestMapping( value = "/users/email", method = RequestMethod.POST )
    @ResponseBody
    public ResponseEntity<UsuarioEntity> getUserByEmail(@RequestBody UsuarioEntity user){

        String email = user.getEmail();
        System.out.println("Get By Email: "+email);
        UsuarioEntity usuario = userService.getUserByEmail(email);
        usuario.setContrasena("undefined");
        System.out.println(usuario.getNombres());
        if(usuario == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<UsuarioEntity>(usuario,HttpStatus.OK);

    }

}
