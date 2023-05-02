import axios from 'axios';

class ApiHandler {
    constructor(accessToken) {
        this.baseUrl = "http://localhost:3032";
        this.accessToken = accessToken || null;
        if (!accessToken) {
            return false
        }
    }

    #POST_REQUEST = (endpoint, data, accessToken) => {
        if (!endpoint) {
            return {error: true, message: "aucun endpoint a été défini"}
        }
        const options = {
            data: data || {},
        }
        if (accessToken) {
            options.Authorization = `Bearer ${accessToken}`
        }
        return axios.post(`${this.baseUrl}${endpoint}`, options)
        .then((res) => res)
        .catch((error) => error.response.data || { error: true, message: "une erreur est survenue" })
    }


    // User methode
    user = {
        SignUp: async (data) => {
            return await this.#POST_REQUEST("/user/signup", data)
        },
        SignIn: () => {
            console.log('SignIn')
        }
    }

    updateAccessToken = (token) => {
        return this.accessToken = token
    }
}

export default ApiHandler;