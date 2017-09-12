package com.eci.cosw.springbootsecureapi.controller;


import com.eci.cosw.springbootsecureapi.model.Evento;

import com.eci.cosw.springbootsecureapi.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api")
public class EventoController {

    @Autowired
    private EventoService eventoService ;

    @RequestMapping(value = "/evento" , method = RequestMethod.GET)
    public List<Evento>getEventos(){
        return  eventoService.getEventoList();
    }

    @RequestMapping (value = "/evento" , method = RequestMethod.POST)
    public  Evento setEvento(@RequestBody Evento evento){
        return  eventoService.addEvento(evento);
    }

}
