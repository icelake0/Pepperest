import React, { useEffect } from 'react';
import { List } from 'components/blocks';
import { STATUS as PaymentStatus } from 'libs/constants/PepperestWebServices/Payments';
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';

const PaymentPendingPage = (props) => {

    useEffect(() => {
        if(!props.loaded) {
            getPayments();
        }
    });

    const getPayments = () => {
        props.onLoadPayments(props.token, props.user, PaymentStatus.PENDING)
    };
    const refreshData = (params) => {
        props.onLoadPayments(props.token, props.user, PaymentStatus.PENDING, params)
    };

    return <List payments={props.payments} 
                meta = {props.meta} 
                links = {props.links} 
                refreshData = {(params) => refreshData(params)}
                loading = {props.loading}/>;
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        user: state.auth.userInfo,
        payments: state.payments[PaymentStatus.PENDING].payments,
        meta: state.payments[PaymentStatus.PENDING].meta,
        links: state.payments[PaymentStatus.PENDING].links,
        links: state.payments[PaymentStatus.PENDING].links,
        loading: state.payments[PaymentStatus.PENDING].loading,
        loaded: state.payments[PaymentStatus.PENDING].loaded
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadPayments: ( token, user, status, extraParams ) => dispatch( actions.loadPayments( token, user, status, extraParams )  )
    };
};
  
export default connect( mapStateToProps, mapDispatchToProps )( PaymentPendingPage );

