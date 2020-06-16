import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    cart: null,
    productAdding : new Set([]),
    addingItemToCartError : null,
    productRemoving : new Set([]),
    removingItemFromCartError : null,
}

const loadedCart = (state, action) => {
    return updateObject( state, {cart : action.cart});
} 

const addingItemToCart = (state, action) => {
    const productAdding = new Set(state.productAdding);
    productAdding.add(action.productId);
    return updateObject( state, {
        productAdding
    });
}

const addedItemToCart = (state, action) => {
    const productAdding = new Set(state.productAdding);
    productAdding.delete(action.productId);
    return updateObject( state, {
        productAdding : productAdding,
        cart: action.cart
    });
}

const failedToAddItemToCart = (state, action) => {
    const productAdding = new Set(state.productAdding);
    productAdding.delete(action.productId);
    return updateObject( state, {
        productAdding : productAdding,
        addingItemToCartError : action.error,
    });
}
const removingItemFromCart = (state, action) => {
    const productRemoving = new Set(state.productRemoving);
    productRemoving.add(action.productId);
    return updateObject( state, {
        productRemoving : productRemoving
    });
}

const removedItemFromCart = (state, action) => {
    const productRemoving = new Set(state.productRemoving);
    productRemoving.delete(action.productId);
    return updateObject( state, {
        productRemoving : productRemoving,
        cart: action.cart
    });
}

const failedToRemoveItemFromCart= (state, action) => {
    const productRemoving = new Set(state.productRemoving);
    productRemoving.delete(action.productId);
    return updateObject( state, {
        productRemoving : productRemoving,
        removingItemFromCartError : action.error,
    });
}


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOADED_CART: return loadedCart(state, action);
        case actionTypes.ADDING_ITEM_TO_CART: return addingItemToCart(state, action);
        case actionTypes.ADDED_ITEM_TO_CART: return addedItemToCart(state, action);
        case actionTypes.FAILED_TO_ADD_ITEM_TO_CART: return failedToAddItemToCart(state, action);
        case actionTypes.REMOVING_ITEM_FROM_CART: return removingItemFromCart(state, action);
        case actionTypes.REMOVED_ITEM_FROM_CART: return removedItemFromCart(state, action);
        case actionTypes.FAILED_TO_REMOVE_ITEM_FROM_CART: return failedToRemoveItemFromCart(state, action);
        default:
            return state;
    }
};

export default reducer;
