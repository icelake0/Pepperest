import PepperestAxios from '../../libs/utils/PepperestAxios'
import { Payments, PaymentsErrorMessages } from '../../libs/constants/PepperestWebServices';
import * as actionTypes from './actionTypes';

export const loadPayments = (token, user, status, extraParams = {}) => {
    return dispatch => {
        dispatch(loadingPayments(status))
        const headers = {
            Authorization : token,
            customerID : user.customerID
        }
        const params = {
            merchantID : user.customerID,
            status : status,
            ...extraParams
        }
        PepperestAxios.get(Payments.TRANSACTIONS, { params, headers })
        .then(response => {
            const payments = response.data.payments.data
            const meta = response.data.payments.meta
            const links = response.data.payments.links
            dispatch(loadedPayment(payments, meta, links, status))
        })
        .catch(error => {
            dispatch(failedToLoadPayment(status, PaymentsErrorMessages.getHistoryFailed))
        })
    };
}

export const loadingPayments = (status) => {
    return {
        type: actionTypes.LOADING_PAYMENTS,
        status: status
    };
}

export const loadedPayment = (payments, meta, links, status) => {
    const statusUpdate = {
        payments,
        meta,
        links,
        loading : false,
        loaded :true,
        error : null,
    }
    return {
        type: actionTypes.FINISHED_LOADING_PAYMENTS,
        status: status,
        statusUpdate: statusUpdate,
    };
}
export const failedToLoadPayment = (status, error) => {
    return {
        type: actionTypes.LOADING_PAYMENTS,
        status: status,
        error: error,
    }
}