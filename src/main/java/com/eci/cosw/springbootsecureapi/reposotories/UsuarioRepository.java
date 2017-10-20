package com.eci.cosw.springbootsecureapi.reposotories;

import com.eci.cosw.springbootsecureapi.model.UsuarioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;


public interface UsuarioRepository extends JpaRepository<UsuarioEntity,Integer>{

    @Query(value ="SELECT * FROM usuario WHERE id_usuario = :id", nativeQuery = true)
    UsuarioEntity getUsuarioById(@Param("id") int id);

    @Query(value ="from UsuarioEntity where usuario = :username", nativeQuery = true)
    UsuarioEntity getUsuarioByUsername(@Param("username") String username);

    @Query(value ="SELECT * FROM usuario WHERE email = :email", nativeQuery = true)
    UsuarioEntity getUsuarioByEmail(@Param("email") String email);

    @Modifying
    @Query(value ="insert into usuario (id_usuario, apellidos, contrasena, email, nombres, numero_id, tipo_id, usuario) values (:id_usuario, :apellidos, :contrasena, :email, :nombres, :numero_id, :tipo_id, :usuario)", nativeQuery = true )
    @Transactional
    void registrarUsuario(@Param("id_usuario") int id_usuario, @Param("apellidos") String apellidos, @Param("contrasena") String contrasena, @Param("email") String email, @Param("nombres") String nombres
            , @Param("numero_id") String numero_id, @Param("tipo_id") String tipo_id, @Param("usuario") String usuario);

    @Modifying
    @Query(value ="UPDATE usuario SET apellidos=:apellidos, contrasena=:contrasena, email=:email, foto_perfil='', nombres=:nombres, tipo_id=:tipo_id, numero_id=:numero_id, usuario=:usuario WHERE id_usuario=:id_usuario", nativeQuery = true )
    @Transactional
    void updateUser(@Param("id_usuario") long id_usuario, @Param("apellidos") String apellidos, @Param("contrasena") String contrasena, @Param("email") String email, @Param("nombres") String nombres
            , @Param("numero_id") String numero_id, @Param("tipo_id") String tipo_id, @Param("usuario") String usuario);

    @Query(value ="SELECT COUNT(id_usuario) FROM usuario", nativeQuery = true )
    int numeroRegistros();
}
