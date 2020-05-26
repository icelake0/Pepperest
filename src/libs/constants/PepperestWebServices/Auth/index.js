export default {
    LOGIN : '/EscrowBackend/api/login',
    REGISTER : '/EscrowBackend/api/register',
    SOCIAL : '/EscrowBackend/api/login/social'
}

export const ErrorMessages = {
    invalid_credentials : "The credentials you have provided is invalid",
    default : "We are unable to authenticate you"
}

export const SOCIAL_PROVIDERS = {
    google : {
        client_id : '1085614773661-e36tjkli9oen6laocn1hra8anuedhn0f',
        redirectURL : 'http://localhost:3000/login',
        baseURL : 'https://accounts.google.com/o/oauth2/v2/auth',
    },
    facebook : {
        client_id : '2253727468182840',
        redirectURL : 'http://localhost:3000/login',
        baseURL : 'https://www.facebook.com/v7.0/dialog/oauth',
    }
}