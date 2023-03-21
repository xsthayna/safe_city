
import axios from 'axios';
import Auth from './index';

class Occurrence {
    private authHeader: typeof Auth;

    constructor() {
        this.authHeader = Auth;
    }

    async handleTypesOccurrence() {
        try {
            const response = await axios.get( this.authHeader.host + "/occurrence/types", {
                headers: {
                    Authorization: this.authHeader.headers.Authorization
                }
            })
            return response.data
        } catch (ex: any) {
            return ex.message;
        }
    }

    async handleGetOccurrence(cep: string) {
        try {
            const response = await axios.get( this.authHeader.host + "/occurrence/list/" + cep, {
                headers: {
                    Authorization: this.authHeader.headers.Authorization
                }
            })
            return response.data
        } catch (ex: any) {
            return ex.message;
        }
    }


    async handleCreateOccurrence(description: string, type: string, date: string, cep: string) {
        try {
            const response = await axios.post(this.authHeader.host + "/occurrence/create", { 
                description,
                type,
                cep,
                date: new Date().toISOString()
            }, {
                headers: {
                    Authorization: this.authHeader.headers.Authorization
                }
            })
            return response.data
        } catch (ex: any) {
            return ex.message;
        }

    }


}

export default new Occurrence()