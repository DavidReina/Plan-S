package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.Evento;

import java.util.List;

public interface EventoService {
    List<Evento> getEventoList();
    Evento addEvento(Evento evento );

    Evento getEvento (int id);

    Evento createEvento (Evento evento);

    Evento suscribeEvento (Evento evento);
}
