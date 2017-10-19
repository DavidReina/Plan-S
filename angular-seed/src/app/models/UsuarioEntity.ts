    export class UsuarioEntity {
        private _idUsuario: number;
		private _email: string;
		private _contrasena: string;
        private _nombres: string;
        private _apellidos: string;
		private _usuario: string;
        private _tipoId: string;
        private _fotoPerfil: Blob;
        private _numeroId: string;
    
        constructor() {

        }

        setUsuario(idUsuario: number, email: string, contrasena: string, nombres: string, apellidos: string, usuario: string, tipoId:string , fotoPerfil:Blob, numeroId: string){
            this._idUsuario = idUsuario;
            this._email = email;
            this._contrasena = contrasena;
            this._nombres = nombres;
            this._apellidos = apellidos;
            this._usuario = usuario;
            this._tipoId = tipoId ;
            this._fotoPerfil=fotoPerfil
            this._numeroId = numeroId;
        }


        set idUsuario(value: number) {
            this._idUsuario = value;
        }

        set email(value: string) {
            this._email = value;
        }

        set contrasena(value: string) {
            this._contrasena = value;
        }

        set nombres(value: string) {
            this._nombres = value;
        }

        set apellidos(value: string) {
            this._apellidos = value;
        }

        set usuario(value: string) {
            this._usuario = value;
        }

        set tipoId(value: string) {
            this._tipoId = value;
        }

        set fotoPerfil(value: Blob) {
            this._fotoPerfil = value;
        }

        set numeroId(value: string) {
            this._numeroId = value;
        }

        get idUsuario(): number {
            return this._idUsuario;
        }

        get email(): string {
            return this._email;
        }

        get contrasena(): string {
            return this._contrasena;
        }

        get nombres(): string {
            return this._nombres;
        }

        get apellidos(): string {
            return this._apellidos;
        }

        get usuario(): string {
            return this._usuario;
        }

        get tipoId(): string {
            return this._tipoId;
        }

        get fotoPerfil(): Blob {
            return this._fotoPerfil;
        }

        get numeroId(): string {
            return this._numeroId;
        }
    }
