import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    customers : [],
    meta : null,
    links : null,
    loading : false,
    loaded :false,
    error : null,
}

const loading = (state, action) => {
    return updateObject( state, {loading : true} );
}

const loadedCustomers = (state, action) => {
    return updateObject( state, action.update );
} 

const failedToLoadCustomers = (state, action) => {
    return updateObject( state, {
        loading : false,
        loaded :false,
        error : action.error
    });
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOADING_CUSTOMERS: return loading(state, action);
        case actionTypes.FINISHED_LOADING_CUSTOMERS: return loadedCustomers(state, action);
        case actionTypes.LOADING_CUSTOMERS_FAILED : return failedToLoadCustomers(state. action)
        default:
            return state;
    }
};

export default reducer;