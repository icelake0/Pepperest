import PepperestAxios from '../../libs/utils/PepperestAxios'
import { Orders, OrdersErrorMessages } from '../../libs/constants/PepperestWebServices';
import * as actionTypes from './actionTypes';
import { PAGE_TYPES as OrdersPageTypes } from 'libs/constants/PepperestWebServices/Orders';

export const loadOrders = (token, user, pageType, extraParams = {}) => {
    return dispatch => {
        dispatch(loadingOrders(pageType))
        const headers = {
            Authorization : token,
            customerID : user.customerID
        }
        const params = {
            customerID : user.customerID,
            pageType : pageType,
            ...extraParams
        }
        PepperestAxios.get(Orders.ORDERS, { params, headers })
        .then(response => {
            if(pageType === OrdersPageTypes.DASHBOARD) {
                const total = response.data.total
                const canceled = response.data.canceled
                const pending = response.data.pending
                const shipped = response.data.shipped
                const today_orders = response.data.today_orders
                const yesterday_orders = response.data.yesterday_orders
                dispatch(loadedOrdersDashboard(total, canceled, pending, shipped, today_orders, yesterday_orders, pageType))
            }else{
                const orders  = response.data.orders.data
                const meta = response.data.orders.meta
                const links = response.data.orders.links
                dispatch(loadedOrders(orders, meta, links, pageType))
            }
        })
        .catch(error => {
            dispatch(failedToLoadOrders(pageType, OrdersErrorMessages.getHistoryFailed))
        })
    };
}

export const loadingOrders  = (pageType) => {
    return {
        type: actionTypes.LOADING_ORDERS,
        pageType: pageType
    };
}

export const loadedOrdersDashboard = (total, canceled, pending, shipped, today_orders, yesterday_orders, pageType) => {
    const pageTypeUpdate = {
        total: total,
        canceled: canceled,
        pending: pending,
        shipped: shipped,
        today_orders: today_orders,
        yesterday_orders: yesterday_orders,
        loading : false,
        loaded :true,
        error : null,
    }
    return {
        type: actionTypes.FINISHED_LOADING_ORDERS,
        pageType: pageType,
        pageTypeUpdate: pageTypeUpdate,
    };
}
export const loadedOrders = (orders, meta, links, pageType) => {
    const pageTypeUpdate = {
        orders,
        meta,
        links,
        loading : false,
        loaded :true,
        error : null,
    }
    return {
        type: actionTypes.FINISHED_LOADING_ORDERS,
        pageType: pageType,
        pageTypeUpdate: pageTypeUpdate,
    };
}
export const failedToLoadOrders = (pageType, error) => {
    return {
        type: actionTypes.LOADING_ORDERS_FAILED,
        pageType: pageType,
        error: error,
    }
}