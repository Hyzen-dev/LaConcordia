import axios from 'axios';

class ApiHandler {
    constructor(accessToken) {
        this.baseUrl = "http://localhost:3032";
        this.accessToken = accessToken || null;
        if (!accessToken) {
            return false
        }
    }

    #POST_REQUEST = (endpoint, data, accessToken, options) => {
        if (!endpoint) {
            return { error: true, message: "aucun endpoint a été défini" }
        }
        const reqOptions = {
            method: "POST",
            data: data || {},
            headers: {}
        }
        if (accessToken) {
            reqOptions.headers.Authorization = `Bearer ${accessToken}`
        }

        if (options) {
            if (options.multipart) {
                reqOptions.headers["Content-Type"] = "multipart/form-data"
            }
        }


        return axios(`${this.baseUrl}${endpoint}`, reqOptions)
            .then((res) => res)
            .catch((error) => error?.response?.data || { error: true, message: "une erreur est survenue" })
    }

    #GET_REQUEST = (endpoint, id, options) => {
        if (!endpoint) {
            return { error: true, message: "aucun endpoint a été défini" }
        }

        const reqOptions = {
            method: "GET",
            headers: {}
        }

        console.log(options)

        if (options) {
            if (options.accessToken) {
                reqOptions.headers.Authorization = `Bearer ${options.accessToken}`
            }
        }

        const apiUrl = !id ? `${this.baseUrl}${endpoint}` : `${this.baseUrl}${endpoint}/${id}`

        return axios(apiUrl, reqOptions)
            .then((res) => res.data)
            .catch((error) => error?.response?.data || { error: true, message: "une erreur est survenue" })
    }

    #PATCH_REQUEST = (endpoint, data, accessToken, options) => {
        if (!endpoint) {
            return { error: true, message: "aucun endpoint a été défini" }
        }

        console.log(options)

        const reqOptions = {
            method: "PATCH",
            data: data || {},
            headers: {}
        }

        if (options) {
            if (options.multipart) {
                reqOptions.headers["Content-Type"] = "multipart/form-data"
            }
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
            return await this.#GET_REQUEST("/user/all", null, { accessToken: this.accessToken })
        },
        GetBase: async () => {
            return await this.#GET_REQUEST("/user/allbase")
        },
        ArchiveUser: async (data) => {
            return await this.#PATCH_REQUEST("/user/archive", data, this.accessToken)
        },
        UserNotification: async (data) => {
            return await this.#PATCH_REQUEST("user/notification", data, this.accessToken)
        },
        GetById: async (data) => {
            return await this.#POST_REQUEST("/user/find", data, this.accessToken)
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

    // UserStatus methods
    userStatus = {
        GetAll: async () => {
            return await this.#GET_REQUEST("/user-status")
        }
    }

    // Instruments methods
    instruments = {
        GetAll: async () => {
            return await this.#GET_REQUEST("/instrument")
        }
    }

    // UserInstruments methods
    userInstruments = {
        GetAll: async () => {
            return await this.#GET_REQUEST("/user-instrument")
        }
    }

    // Messages methods
    message = {
        GetAll: async () => {
            return await this.#GET_REQUEST("/message")
        },
        ArchiveMessage: async (data) => {
            return await this.#PATCH_REQUEST("/message/archive", data, this.accessToken)
        },
        IsReadMessage: async (data) => {
            return await this.#PATCH_REQUEST("/message/read", data, this.accessToken)
        }
    }


    // News methods
    news = {
        Create: async (data) => {
            return await this.#POST_REQUEST("/news/create", data, this.accessToken, { multipart: true })
        },
        Update: async (data) => {
            return await this.#PATCH_REQUEST("/news/update", data, this.accessToken, { multipart: data.thumbnail ? true : false })
        },
        GetAll: async () => {
            return await this.#GET_REQUEST("/news")
        },
        GetById: async (data) => {
            return await this.#POST_REQUEST("/news/find", data)
        }
    }


    // Events methods
    events = {
        Create: async (data) => {
            return await this.#POST_REQUEST("/event/create", data, this.accessToken, { multipart: true })
        },
        GetAll: async () => {
            return await this.#GET_REQUEST("/event")
        },
        GetById: async (data) => {
            return await this.#POST_REQUEST("/event/find", data)
        }
    }


    // Albums methods
    albums = {
        GetAll: async () => {
            return await this.#GET_REQUEST("/album")
        },
        GetById: async (data) => {
            return await this.#POST_REQUEST("/album/find", data)
        }
    }

    // Medias methods
    medias = {
        GetById: async (data) => {
            return await this.#POST_REQUEST("/media/find", data)
        }
    }


    updateAccessToken = (token) => {
        // localStorage.setItem("accessToken", token)
        return this.accessToken = token
    }
}

export default ApiHandler;