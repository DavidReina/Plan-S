package com.eci.cosw.springbootsecureapi.repository;

import com.eci.cosw.springbootsecureapi.model.UsuarioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;



public interface UsuarioRepository extends JpaRepository<UsuarioEntity,Integer>{
    

}
