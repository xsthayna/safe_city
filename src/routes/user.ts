
import axios from 'axios';
import Auth from './index';

class User {
    private authHeader: typeof Auth;

    constructor() {
        this.authHeader = Auth;
    }

    async handleLogin(email: string, password: string) {
        try {
            const response = await axios.post( this.authHeader.host + "/user/login", { email, password })
            return response.data
        } catch (ex: any) {
            return ex.message;
        }

    }

    async handleCadastro(user: { name: string, surname: string, cpf: string, email: string, password: string, cep: string, country: string }) {
        try {
            const response = await axios.post(this.authHeader.host + "/user/create", { 
                name: user.name,
                surname: user.surname,
                cpf: user.cpf,
                email: user.email,
                password: user.password,
                cep: user.cep,
                country: user.country
             })

            return response.data
        } catch (ex: any) {
            return ex.message;
        }

    }


}

export default new User()