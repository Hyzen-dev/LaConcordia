import {useApi} from '../index';

export const userSignUp = (payload) => {
    console.log(useApi.user.SignUp())
    return {
        type: 'USER_SIGNUP',
        payload
    }
}

export const userSignIn = (payload) => {
    useApi.user.SignIn()
    console.log(useApi.accessToken)
    useApi.updateAccessToken('1234')
    console.log(useApi.accessToken)
    return {
        type: 'USER_SIGNIN',
        payload
    }
}