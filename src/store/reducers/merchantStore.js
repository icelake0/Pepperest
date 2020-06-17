import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    products : [],
    meta : null,
    links : null,
    loading : false,
    loaded :false,
    error : null,
}

const loading = (state, action) => {
    return updateObject( state, {loading : true} );
}

const loadedProducts = (state, action) => {
    return updateObject( state, action.update );
} 

const failedToLoadProducts = (state, action) => {
    return updateObject( state, {
        loading : false,
        loaded :false,
        error : action.error
    });
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOADING_MACHANT_STORE: return loading(state, action);
        case actionTypes.FINISHED_LOADING_MACHANT_STORE: return loadedProducts(state, action);
        case actionTypes.LOADING_MACHANT_STORE_FAILED : return failedToLoadProducts(state, action)
        default:
            return state;
    }
};

export default reducer;