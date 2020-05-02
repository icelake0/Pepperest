import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import { STATUS as PaymentStatus } from 'libs/constants/PepperestWebServices/Payments';

let initialState = {}
Object.values(PaymentStatus).forEach(status => {
    initialState[status] = {
        payments : [],
        meta : null,
        links : null,
        loading : false,
        loaded :false,
        error : null,
    }
});

const loading = (state, action) => {
    const updatedPaymentLoadingState = updateObject(state[action.status], {loading : true})
    let update = {};
    update[action.status] = updatedPaymentLoadingState;
    return updateObject( state, update );
}

const loadedPayment = (state, action) => {
    let update = {};
    update[action.status] = action.statusUpdate;
    return updateObject( state, update );
} 

const failedToLoadPayment = (state, action) => {
    const errorChanges = {
        loading : false,
        loaded :false,
        error : action.error
    };
    const updatedPaymentLoadingState = updateObject(state[action.status], errorChanges)
    let update = {};
    update[action.status] = updatedPaymentLoadingState;
    return updateObject( state, update );
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOADING_PAYMENTS: return loading(state, action);
        case actionTypes.FINISHED_LOADING_PAYMENTS: return loadedPayment(state, action);
        case actionTypes.LOADING_PAYMENTS_FAILED : return failedToLoadPayment(state. action)
        default:
            return state;
    }
};

export default reducer;