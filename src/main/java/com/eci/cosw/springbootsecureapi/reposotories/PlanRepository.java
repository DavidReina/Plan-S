package com.eci.cosw.springbootsecureapi.reposotories;

import com.eci.cosw.springbootsecureapi.model.PlanEntity;
import com.eci.cosw.springbootsecureapi.model.UsuarioEntity;
import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PlanRepository extends JpaRepository<PlanEntity,Integer> {

    @Query(value ="from PlanEntity where nombre like '%'||:name||'%'", nativeQuery = true)
    PlanEntity getPlanByname(@Param("name") String name);



}
