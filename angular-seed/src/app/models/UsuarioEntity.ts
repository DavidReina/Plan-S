    export class UsuarioEntity {
        private idUsuario: number;
		private email: string;
		private contrasena: string;
        private nombres: string;
        private apellidos: string;
		private usuario: string;
        private tipoId: string;
        private fotoPerfil: Blob;
        private numeroId: string;
    
        constructor(idUsuario: number, email: string, contrasena: string, nombres: string, apellidos: string, usuario: string, tipoId:string , fotoPerfil:Blob, numeroId: string) {
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
