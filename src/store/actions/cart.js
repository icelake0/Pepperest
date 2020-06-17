import PepperestAxios from '../../libs/utils/PepperestAxios'
import {Cart, CartErrorMessages}from '../../libs/constants/PepperestWebServices';
import * as actionTypes from './actionTypes';

export const loadCart = (token, user) => {
    return dispatch => {
        const headers = {
            Authorization : token,
            customerID : user.customerID
        }
        const params = {
            customerID : user.customerID,
        }
        PepperestAxios.get(Cart.LOAD_CART, { params, headers })
        .then(response => {
            dispatch(loadedCart(response.data.cart))
        })
        .catch(error => {})
    };
}

export const loadedCart = (cart) => {
    return {
        type: actionTypes.LOADED_CART,
        cart: cart,
    };
}

export const addItemToCart = (token, user, payLoad) => {
    return dispatch => {
        dispatch(addingItemToCart(payLoad.productID));
        const headers = {
            Authorization : token,
            customerID : user.customerID
        }
        payLoad.customerID = user.customerID;
        PepperestAxios.post(Cart.ADD_TO_CART, payLoad, {headers: headers})
        .then( response => {
            const cart = response.data.cart;
            dispatch(addedItemToCart(payLoad.productID, cart));
        })
        .catch( error => {
            error = error.response.data?.message ? 
                Object.values(error.response.data?.message).flat().join(' ') : 
                CartErrorMessages.addToCartFailed;
            dispatch(failedToAddItemToCart(payLoad.productID, error))
        });
    };
}

export const addingItemToCart = (productId) => {
    return {
        type: actionTypes.ADDING_ITEM_TO_CART,
        productId: productId
    };
}

export const addedItemToCart  = (productId, cart) => {
    return {
        type: actionTypes.ADDED_ITEM_TO_CART,
        productId: productId,
        cart: cart
    };
}

export const failedToAddItemToCart = (productId, error) => {
    return {
        type: actionTypes.FAILED_TO_ADD_ITEM_TO_CART,
        productId: productId,
        error : error
    };
}

export const removeItemFromCart = (token, user, payLoad) => {
    return dispatch => {
        dispatch(removingItemFromCart(payLoad.productID));
        const headers = {
            Authorization : token,
            customerID : user.customerID
        }
        payLoad.customerID = user.customerID;
        PepperestAxios.post(Cart.REMOVE_FROM_CART, payLoad, {headers: headers})
        .then( response => {
            const cart = response.data.cart;
            dispatch(removedItemFromCart(payLoad.productID, cart));
        })
        .catch( error => {
            error = error.response?.data?.message ? 
                Object.values(error.response.data?.message).flat().join(' ') : 
                CartErrorMessages.removeFromCartFailed;
            dispatch(failedToRemoveItemFromCart(payLoad.productID, error))
        });
    };
}

export const removingItemFromCart = (productId) => {
    return {
        type: actionTypes.REMOVING_ITEM_FROM_CART,
        productId: productId
    };
}

export const removedItemFromCart  = (productId, cart) => {
    return {
        type: actionTypes.REMOVED_ITEM_FROM_CART,
        productId: productId,
        cart : cart
    };
}

export const failedToRemoveItemFromCart = (productId,error) => {
    return {
        type: actionTypes.FAILED_TO_REMOVE_ITEM_FROM_CART,
        productId: productId,
        error : error
    };
}
