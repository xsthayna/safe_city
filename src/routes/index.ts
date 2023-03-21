
class Auth {
    host = "http://192.168.0.76:3001"
    headers = {
        "Authorization": ""
    }

    setHeader(token: string) {
        this.headers.Authorization = `Bearer ${token}`
    }

}

export default new Auth();