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
        const reqOptions = {
            method: "POST",
            data: data || {},
            headers: {}
        }
        if (accessToken) {
            reqOptions.headers.Authorization = `Bearer ${accessToken}`
        }

        return axios(`${this.baseUrl}${endpoint}`, reqOptions)
        .then((res) => res)
        .catch((error) => error?.response?.data || { error: true, message: "une erreur est survenue" })
    }
    
    #GET_REQUEST = (endpoint, id) => {
        if (!endpoint) {
            return {error: true, message: "aucun endpoint a été défini"}
        }

        const reqOptions = {
            method: "GET",
        }

        const apiUrl = !id ? `${this.baseUrl}${endpoint}` : `${this.baseUrl}${endpoint}/${id}`

        return axios(apiUrl, reqOptions)
        .then((res) => res.data)
        .catch((error) => error?.response?.data || { error: true, message: "une erreur est survenue" })
    }

    #PATCH_REQUEST = (endpoint, data, accessToken) => {
        if (!endpoint) {
            return {error: true, message: "aucun endpoint a été défini"}
        }
        const reqOptions = {
            method: "PATCH",
            data: data || {},
            headers: {}
        }
        if (accessToken) {
            reqOptions.headers.Authorization = `Bearer ${accessToken}`
        }

        return axios(`${this.baseUrl}${endpoint}`, reqOptions)
        .then((res) => res)
        .catch((error) => error?.response?.data || { error: true, message: "une erreur est survenue" })
    }


    // User methods
    user = {
        SignUp: async (data) => {
            // console.log(data)
            return await this.#POST_REQUEST("/user/signup", data)
        },
        SignIn: async (data) => {
            return await this.#POST_REQUEST("/user/signin", data)
        },
        GetProfile: async () => {
            return await this.#POST_REQUEST("/user/profile", {}, this.accessToken)
        },
        GetAll: async () => {
            return await this.#GET_REQUEST("/user")
        },
        ArchiveUser: async (data) => {
            return await this.#PATCH_REQUEST("/user/archive", data, this.accessToken)
        }
    }

    // Roles methods
    roles = {
        GetAll: async () => {
            return await this.#GET_REQUEST("/role")
        }
    }

    // Status methods
    status = {
        GetAll: async () => {
            return await this.#GET_REQUEST("/status")
        }
    }

    // Instruments methods
    instruments = {
        GetAll: async () => {
            return await this.#GET_REQUEST("/instrument")
        }
    }

    // Messages methods
    message = {
        GetAll: async () => {
            return await this.#GET_REQUEST("/message")
        }
    }

    updateAccessToken = (token) => {
        // localStorage.setItem("accessToken", token)
        return this.accessToken = token
    }
}

export default ApiHandler;