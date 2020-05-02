import PepperestAxios from '../../libs/utils/PepperestAxios'
import { Customers, CustomersErrorMessages } from '../../libs/constants/PepperestWebServices';
import * as actionTypes from './actionTypes';

export const loadCustomer = (token, user, extraParams = {}) => {
    return dispatch => {
        dispatch(loadingCustomer())
        const headers = {
            Authorization : token,
            customerID : user.customerID
        }
        const params = {
            merchantID : user.customerID,
            ...extraParams
        }
        PepperestAxios.get(Customers.CUSTOMER, { params, headers })
        .then(response => {
            const customers = response.data.customers.data
            const meta = response.data.customers.meta
            const links = response.data.customers.links
            dispatch(loadedCustomer(customers, meta, links))
        })
        .catch(error => {
            dispatch(failedToLoadCustomer(CustomersErrorMessages.getHistoryFailed))
        })
    };
}

export const loadingCustomer = () => {
    return {
        type: actionTypes.LOADING_CUSTOMERS,
    };
}

export const loadedCustomer = (customers, meta, links) => {
    const update = {
        customers,
        meta,
        links,
        loading : false,
        loaded :true,
        error : null,
    }
    return {
        type: actionTypes.FINISHED_LOADING_CUSTOMERS,
        update: update,
    };
}
export const failedToLoadCustomer = (error) => {
    return {
        type: actionTypes.LOADING_CUSTOMERS_FAILED,
        error: error,
    }
}