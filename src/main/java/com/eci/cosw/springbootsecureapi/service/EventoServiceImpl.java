package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.Evento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class EventoServiceImpl implements EventoService {

    private List<Evento> eventos = new ArrayList<Evento>();


    @Autowired
    public EventoServiceImpl() {

    }


    @Override
    public List<Evento> getEventoList() {
        return null;
    }

    @Override
    public Evento addEvento(Evento evento) {
        return null;
    }

    @Override
    public Evento getEvento(int id) {
        return null;
    }

    @Override
    public Evento createEvento(Evento evento) {
        return null;
    }

    @Override
    public Evento suscribeEvento(Evento evento) {
        return null;
    }
}


