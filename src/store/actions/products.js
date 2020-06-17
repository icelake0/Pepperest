import PepperestAxios from '../../libs/utils/PepperestAxios'
import { Products, ProductsErrorMessages } from '../../libs/constants/PepperestWebServices';
import * as actionTypes from './actionTypes';

export const loadProduct = (token, user, extraParams = {}) => {
    return dispatch => {
        dispatch(loadingProduct())
        const headers = {
            Authorization : token,
            customerID : user.customerID
        }
        const params = {
            merchantID : user.customerID,
            ...extraParams
        }
        PepperestAxios.get(Products.PRODUCTS, { params, headers })
        .then(response => {
            const products = response.data.products.data
            const meta = response.data.products.meta
            const links = response.data.products.links
            dispatch(loadedProduct(products, meta, links))
        })
        .catch(error => {
            dispatch(failedToLoadProduct(ProductsErrorMessages.getHistoryFailed))
        })
    };
}

export const loadingProduct = () => {
    return {
        type: actionTypes.LOADING_PRODUCTS,
    };
}

export const loadedProduct = (products, meta, links) => {
    const update = {
        products,
        meta,
        links,
        loading : false,
        loaded :true,
        error : null,
    }
    return {
        type: actionTypes.FINISHED_LOADING_PRODUCTS,
        update: update,
    };
}
export const failedToLoadProduct = (error) => {
    return {
        type: actionTypes.LOADING_PRODUCTS_FAILED,
        error: error,
    }
}

export const addProduct = (token, user, payLoad) => {
    return dispatch => {
        dispatch(addingProduct())
        const headers = {
            Authorization : token,
            customerID : user.customerID
        }
        payLoad.merchantID = user.customerID

        PepperestAxios.post(Products.ADD_PRODUCTS, payLoad, {headers: headers})
        .then(response => {
            dispatch(addedProduct())
            const products = response.data.products.data
            const meta = response.data.products.meta
            const links = response.data.products.links
            dispatch(loadedProduct(products, meta, links))
        })
        .catch(error => {
            error = error.response.data?.message ? 
                Object.values(error.response.data?.message).flat().join(' ') : 
                ProductsErrorMessages.addProductFailed;
            dispatch(failedToAddProduct(error))
        })
    };
}

export const addingProduct = () => {
    return {
        type: actionTypes.ADDING_PRODUCT,
    };
}

export const addedProduct = () => {
    return {
        type: actionTypes.FINISHED_ADDING_PRODUCT,
    };
}
export const failedToAddProduct = (error) => {
    return {
        type: actionTypes.ADDING_PRODUCT_FAILED,
        error: error,
    }
}