export class Usuario {
        private nombre: string;
        private apellido: string;
        private edad: Number;
        private TI: string;
	private identificacion: string;
        private ciudad: string;
	private mail: string;
	private password: string;
    
        constructor(nombre: string, apellido: string, edad: Number, TI: string, identificacion: string, ciudad: string, mail: string, password: string) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.TI = TI;
        this.identificacion = identificacion;
        this.ciudad = ciudad;
        this.mail = mail;
        this.password = password;
    }
    }
