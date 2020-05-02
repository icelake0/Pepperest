import PepperestAxios from '../../libs/utils/PepperestAxios'
import { Auth, AuthErrorMessages } from '../../libs/constants/PepperestWebServices';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userInfo) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userInfo: userInfo
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const registerFail = (errors) => {
    errors = {
        accountType : errors.accountType && errors.accountType.join('<br />'),
        email : errors.email && errors.email.join('<br />'),
        name : errors.name && errors.name.join('<br />'),
        businessName : errors.businessName && errors.businessName.join('<br />'),
        password : errors.password && errors.password.join('<br />'),
    }
    return {
        type: actionTypes.REGISTER_FAIL,
        errors: errors
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('tokenType');
    localStorage.removeItem('userInfo');
    return {
        type: actionTypes.LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const login = (email, password) => {
    return dispatch => {
        dispatch(autenticate({email, password}))
    };
};

export const register = (payLoad) => {
    return dispatch => {
        dispatch(autenticate(payLoad, 'register'))
    };
}

export const autenticate = (payLoad, type = 'login') => {
    return dispatch => {
        dispatch(authStart());
        const endpoint = type === 'login' ? Auth.LOGIN : Auth.REGISTER;
        PepperestAxios.post(endpoint, payLoad)
        .then( response => {
            const token = 'Bearer '+response.data.token.access_token;
            const expirationDate = new Date(new Date().getTime() + response.data.token.expires_in * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('tokenType', response.data.token.token_type);
            localStorage.setItem('userInfo', JSON.stringify(response.data.userInfo));
            dispatch(authSuccess(token, response.data.userInfo));
            dispatch(checkAuthTimeout(response.data.token.expires_in));
        } )
        .catch( error => {
            let errorMessage = null;
            if(type === 'login'){
                errorMessage = error.response ? 
                (AuthErrorMessages[error.response.data.error] || AuthErrorMessages.default) : 
                'Unable to connect to the server' //TODO handle this in global PepperestAxios
                dispatch(authFail(errorMessage));
            }else{
                errorMessage = error.response ? error.response.data.message : 
                'Unable to connect to the server' //TODO handle this in global PepperestAxios
                dispatch(registerFail(errorMessage));
            }
        } );
    };
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                dispatch(authSuccess(token, userInfo));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};