package com.eci.cosw.springbootsecureapi.controller;

import com.eci.cosw.springbootsecureapi.model.Usuario;
import com.eci.cosw.springbootsecureapi.service.UsuarioService;
import com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithm;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletException;
import java.security.Principal;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("user")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @RequestMapping( value = "/login", method = RequestMethod.POST )
    public Token login( @RequestBody Usuario login )
            throws ServletException
    {

        String jwtToken = "";

        if ( login.getMail() == null || login.getPassword() == null )
        {
            throw new ServletException( "Please fill in username and password" );
        }

        String username = login.getMail();
        String password = login.getPassword();

        Usuario user = usuarioService.getUsuario( 0l );

        if ( user == null )
        {
            throw new ServletException( "User username not found." );
        }

        String pwd = user.getPassword();

        if ( !password.equals( pwd ) )
        {
            throw new ServletException( "Invalid login. Please check your name and password." );
        }

        jwtToken = Jwts.builder().setSubject( username ).claim( "roles", "user" ).setIssuedAt( new Date() ).signWith(
                io.jsonwebtoken.SignatureAlgorithm.HS256, "secretkey" ).compact();

        return new Token( jwtToken );
    }

    @RequestMapping( value = "/users", method = RequestMethod.GET )
    public List<Usuario> getUsers(){
        return usuarioService.getUsers();
    }

    @RequestMapping( value = "/users", method = RequestMethod.POST )
    public Usuario setUsuario(@RequestBody Usuario user){
        return usuarioService.registerUser(user);
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
