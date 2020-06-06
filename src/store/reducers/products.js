import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    products : [],
    meta : null,
    links : null,
    loading : false,
    loaded :false,
    error : null,
    addingProduct : false,
    addProductError : null,
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

const addingProduct = (state, action) => {
    return updateObject( state, {addingProduct : true} );
}

const addedProduct = (state, action) => {
    return updateObject( state, {addingProduct : false} );
} 

const failedToAddProducts = (state, action) => {
    return updateObject( state, {
        addingProduct : false,
        addProductError : action.error
    });
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOADING_PRODUCTS: return loading(state, action);
        case actionTypes.FINISHED_LOADING_PRODUCTS: return loadedProducts(state, action);
        case actionTypes.LOADING_PRODUCTS_FAILED : return failedToLoadProducts(state, action)
        case actionTypes.ADDING_PRODUCT: return addingProduct(state, action);
        case actionTypes.FINISHED_ADDING_PRODUCT: return addedProduct(state, action);
        case actionTypes.ADDING_PRODUCT_FAILED : return failedToAddProducts(state, action)
        default:
            return state;
    }
};

export default reducer;