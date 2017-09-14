    export class User {
		private email: string;
		private password: string; 
        private firstname: string;
        private lastname: string;
		private username: string;
        private ti: string;
        private identification: string;
    
        constructor(email: string, password: string, firstname: string, lastname: string, username: string, image: string, ti:string , identification: string) {
			this.email = email;
			this.password = password;            
			this.firstname = firstname;
            this.lastname = lastname;
			this.username = username;
            this.ti = ti ;
            this.identification = identification;
        }
    }
