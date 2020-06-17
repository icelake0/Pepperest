import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    error: null,
    loading: false,
    userInfo: null,
    errors: {
        accountType : null,
        email : null,
        name : null,
        businessName : null,
        password : null,
    }
};

const loginStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const loginSuccess = (state, action) => {
    return updateObject( state, { 
        token: action.token,
        userInfo: action.userInfo,
        error: null,
        loading: false
     } );
};

const loginFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const logout = (state, action) => {
    return updateObject(state, { token: null, userInfo: null });
};

const registerFail = (state, action) => {
    return updateObject(state, { errors: action.errors, loading: false});
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return loginStart(state, action);
        case actionTypes.AUTH_SUCCESS: return loginSuccess(state, action);
        case actionTypes.AUTH_FAIL: return loginFail(state, action);
        case actionTypes.LOGOUT: return logout(state, action);
        case actionTypes.REGISTER_FAIL: return registerFail(state, action);
        default:
            return state;
    }
};

export default reducer;