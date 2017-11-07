package com.eci.cosw.springbootsecureapi.reposotories;

import com.eci.cosw.springbootsecureapi.model.PlanEntity;
import com.eci.cosw.springbootsecureapi.model.PreferenciaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.sql.Blob;
import java.sql.Timestamp;
import java.util.List;

public interface PlanRepository extends JpaRepository<PlanEntity,Integer> {

    @Query(value ="SELECT  id_plan, nombre, descripcion, ubicacion, fecha_inicio, fecha_final, costo_promedio, creador_plan, detalle_preferencia, imagen_plan FROM plan LEFT JOIN plan_asistente ON plan_id=id_plan WHERE nombre LIKE CONCAT('%',:nombreplan,'%') AND (NOT usuario_id=:iduser OR usuario_id IS NULL) AND NOT creador_plan=:iduser", nativeQuery = true)
    List<PlanEntity> getPlanByname(@Param("nombreplan") String nombreplan, @Param("iduser") long iduser);

    @Query(value ="SELECT * FROM plan WHERE creador_plan=:id", nativeQuery = true)
    List<PlanEntity> getPlansByIdUser(@Param("id") long id);

    @Query(value ="SELECT id_plan, nombre, descripcion, ubicacion, fecha_inicio, fecha_final, costo_promedio, creador_plan, detalle_preferencia, imagen_plan FROM plan LEFT JOIN plan_asistente ON plan.id_plan = plan_asistente.plan_id WHERE NOT creador_plan =:iduser AND (NOT plan_asistente.usuario_id =:iduser OR plan_asistente.usuario_id IS NULL)", nativeQuery = true)
    List<PlanEntity> getPlansByNotIdUser(@Param("iduser") long iduser);

    @Query(value ="SELECT * FROM plan_asistente WHERE plan_id=:id_plan AND usuario_id=:id_usuario", nativeQuery = true)
    List<PlanEntity> isSubscribedPlan(@Param("id_usuario") long id_usuario, @Param("id_plan") long id_plan);

    @Modifying
    @Query(value ="insert into plan_asistente (usuario_id, plan_id) values (:id_usuario, :id_plan)", nativeQuery = true )
    @Transactional
    void subscribePlan(@Param("id_usuario") long id_usuario, @Param("id_plan") long id_plan);

    @Query(value ="SELECT id_plan, nombre, descripcion, ubicacion, fecha_inicio, fecha_final, costo_promedio, creador_plan, detalle_preferencia, imagen_plan FROM plan LEFT JOIN plan_asistente ON plan.id_plan = plan_asistente.plan_id WHERE NOT creador_plan =:id_usuario AND plan_asistente.usuario_id =:id_usuario", nativeQuery = true)
    List<PlanEntity> subscribedPlans( @Param("id_usuario") long id_usuario );

    @Modifying
    @Query(value ="DELETE FROM plan_asistente WHERE usuario_id=:id_usuario AND plan_id=:id_plan", nativeQuery = true )
    @Transactional
    void unsubscribePlan(@Param("id_usuario") long id_usuario, @Param("id_plan") long id_plan);

    @Modifying
    @Query(value ="UPDATE plan SET nombre=:nombre, descripcion=:descripcion, ubicacion=:ubicacion, fecha_inicio=:fecha_inicio, fecha_final=:fecha_final, costo_promedio=:costo_promedio, detalle_preferencia=:detalle_preferencia, imagen_plan=:imagen_plan WHERE id_plan=:id_plan", nativeQuery = true )
    @Transactional
    void updatePlan(@Param("id_plan") long id, @Param("nombre") String nombre, @Param("descripcion") String descripcion, @Param("ubicacion") String ubicacion, @Param("fecha_inicio") Timestamp fecha_inicio, @Param("fecha_final") Timestamp fecha_final,
                    @Param("costo_promedio") int costo_promedio, @Param("detalle_preferencia") int detalle_preferencia, @Param("imagen_plan") Blob imagen_plan);

    @Query(value ="SELECT * FROM preferencia", nativeQuery = true )
    List<Object[]> getPreferencias ();


}
