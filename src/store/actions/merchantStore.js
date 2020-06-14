import PepperestAxios from '../../libs/utils/PepperestAxios'
import { Products, ProductsErrorMessages } from '../../libs/constants/PepperestWebServices';
import * as actionTypes from './actionTypes';

export const loadMerchantStoreProduct = (token, user, extraParams = {}) => {
    return dispatch => {
        dispatch(loadingMerchantStoreProduct())
        const headers = {
            Authorization : token,
            customerID : user.customerID
        }
        const params = {
            customerID : user.customerID,
            ...extraParams
        }
        PepperestAxios.get(Products.MACHANT_STORE, { params, headers })
        .then(response => {
            const products = response.data.products.data
            const meta = response.data.products.meta
            const links = response.data.products.links
            dispatch(loadedMerchantStoreProduct(products, meta, links))
        })
        .catch(error => {
            dispatch(failedToLoadMerchantStoreProduct(ProductsErrorMessages.getHistoryFailed))
        })
    };
}

export const loadingMerchantStoreProduct = () => {
    return {
        type: actionTypes.LOADING_MACHANT_STORE,
    };
}

export const loadedMerchantStoreProduct = (products, meta, links) => {
    const update = {
        products,
        meta,
        links,
        loading : false,
        loaded :true,
        error : null,
    }
    return {
        type: actionTypes.FINISHED_LOADING_MACHANT_STORE,
        update: update,
    };
}
export const failedToLoadMerchantStoreProduct = (error) => {
    return {
        type: actionTypes.LOADING_MACHANT_STORE_FAILED,
        error: error,
    }
}
