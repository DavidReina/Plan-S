import { Usuario } from "../models/Usuario";

export class Evento {
    private  nombre: string;
    private  id: Number;
    private  creador: string;
    private  informacion:string;
    private  fecha:Date;
    private  lugar:string;
    private usuario:Usuario;

constructor(nombre:string, id:Number, creador: string, informacion:string,fecha:Date,lugar:string,usuario:Usuario) {
	this.nombre = nombre;
	this.id = id;
        this.creador = creador;
        this.informacion = informacion;
        this.fecha = fecha;
        this.lugar = lugar;
        this.usuario = usuario;
    }

}
