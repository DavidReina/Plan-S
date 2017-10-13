    export class UsuarioEntity {
		private email: string;
		private contrasena: string;
        private nombres: string;
        private apellidos: string;
		private usuario: string;
        private tipoId: string;
        private numeroId: string;
    
        constructor(email: string, contrasena: string, nombres: string, apellidos: string, usuario: string, tipoId:string , numeroId: string) {
			this.email = email;
			this.contrasena = contrasena;
			this.nombres = nombres;
            this.apellidos = apellidos;
			this.usuario = usuario;
            this.tipoId = tipoId ;
            this.numeroId = numeroId;
        }
    }
