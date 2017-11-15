package com.eci.cosw.springbootsecureapi.reposotories;

import com.eci.cosw.springbootsecureapi.model.PlanEntity;
import com.eci.cosw.springbootsecureapi.model.PreferenciaEntity;
import com.eci.cosw.springbootsecureapi.model.UsuarioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;


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

    @Query(value ="SELECT id_usuario,email,contrasena,nombres,apellidos,usuario,tipo_id,numero_id,foto_perfil FROM usuario LEFT JOIN plan_asistente ON id_usuario=usuario_id WHERE plan_id=:idplan", nativeQuery = true)
    List<UsuarioEntity> asistentesPlan(@Param("idplan") Long idplan);

    @Modifying
    @Query(value ="INSERT INTO usuario_preferencia (usuario, detalle_preferencia) VALUES (:id,(SELECT id_preferencia FROM preferencia WHERE nombre=:preferencia));", nativeQuery = true )
    @Transactional
    void setPreferenceUser (@Param("id") long id, @Param("preferencia") String preferencia);

    @Modifying
    @Query(value ="DELETE FROM usuario_preferencia WHERE usuario=:id;", nativeQuery = true )
    @Transactional
    void deletePreferenceUser (@Param("id") long id);

    @Query(value ="SELECT id_preferencia,nombre FROM usuario_preferencia INNER JOIN preferencia ON detalle_preferencia=id_preferencia WHERE usuario=:id", nativeQuery = true)
    List<Object[]> getPreferenceUser(@Param("id") Long id);

}
