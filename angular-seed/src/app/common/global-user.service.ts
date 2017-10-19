import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router, CanActivate } from '@angular/router';

import { AppConfiguration } from '../common/config/app-configuration.service';
import { UsuarioEntity } from '../models/UsuarioEntity';

@Injectable()
export class GlobalUserService {

    private resourceUrl:string = "";

    constructor(public usuarioLogin: UsuarioEntity) { }

    public setUserLogin(usuarioEntity: UsuarioEntity) {
        this.usuarioLogin.idUsuario = usuarioEntity.idUsuario;
        this.usuarioLogin.email = usuarioEntity.email;
        this.usuarioLogin.usuario = usuarioEntity.usuario;
        this.usuarioLogin.apellidos=usuarioEntity.apellidos;
        this.usuarioLogin.nombres=usuarioEntity.nombres;
        this.usuarioLogin.tipoId= usuarioEntity.tipoId;
        this.usuarioLogin.numeroId = usuarioEntity.numeroId;
        console.log("IdUsuarioGlobal: "+this.usuarioLogin.idUsuario)
    }

    public getUserLogin(): UsuarioEntity{
        return this.usuarioLogin;
    }



}