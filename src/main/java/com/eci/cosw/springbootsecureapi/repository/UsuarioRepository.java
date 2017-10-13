package com.eci.cosw.springbootsecureapi.repository;

import com.eci.cosw.springbootsecureapi.model.UsuarioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;



public interface UsuarioRepository extends JpaRepository<UsuarioEntity,Integer>{

    @Query(value ="select u from usuario where u.usuario = :username", nativeQuery = true)
    UsuarioEntity getUsuarioByUsername(@Param("username") String usernamed);

    @Query(value ="Select u from usuario where u.email = :email", nativeQuery = true)
    UsuarioEntity getUsuarioByEmail(@Param("email") String email);

    @Query(value ="Select u from usuario where u.email = :email and u.contrasena = :pass", nativeQuery = true )
    UsuarioEntity getUsuarioByEmailAndPass(@Param("email") String email, @Param("pass") String pass);
}
