    export class UsuarioEntity {
        public idUsuario: number;
		public email: string;
        public contrasena: string;
        public nombres: string;
        public apellidos: string;
        public usuario: string;
        public tipoId: string;
        public fotoPerfil: string;
        public numeroId: string;
    
        constructor() {

        }

        public setUsuarioCompleto(idUsuario: number, email: string, contrasena: string, nombres: string, apellidos: string, usuario: string, tipoId:string , fotoPerfil:string, numeroId: string){
            this.idUsuario = idUsuario;
            this.email = email;
            this.contrasena = contrasena;
            this.nombres = nombres;
            this.apellidos = apellidos;
            this.usuario = usuario;
            this.tipoId = tipoId ;
            this.fotoPerfil=fotoPerfil
            this.numeroId = numeroId;
        }

    }
