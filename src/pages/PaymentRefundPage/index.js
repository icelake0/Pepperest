import React, { useEffect } from 'react';
import { List } from 'components/blocks';
import { STATUS as PaymentStatus } from 'libs/constants/PepperestWebServices/Payments';
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';

const PaymentRefundPage = (props) => {
    useEffect(() => {
        if(!props.loaded && !props.loading) {
            getPayments();
        }
    });

    const getPayments = () => {
        props.onLoadPayments(props.token, props.user, PaymentStatus.REFUNDED)
    };
    const refreshData = (params) => {
        props.onLoadPayments(props.token, props.user, PaymentStatus.REFUNDED, params)
    };

    return <List payments={props.payments} 
                meta = {props.meta} 
                links = {props.links} 
                refreshData = {(params) => refreshData(params)}
                loading = {props.loading}/>;
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        user: state.auth.userInfo,
        payments: state.payments[PaymentStatus.REFUNDED].payments,
        meta: state.payments[PaymentStatus.REFUNDED].meta,
        links: state.payments[PaymentStatus.REFUNDED].links,
        links: state.payments[PaymentStatus.REFUNDED].links,
        loading: state.payments[PaymentStatus.REFUNDED].loading,
        loaded: state.payments[PaymentStatus.REFUNDED].loaded
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadPayments: ( token, user, status, extraParams ) => dispatch( actions.loadPayments( token, user, status, extraParams )  )
    };
};
  
export default connect( mapStateToProps, mapDispatchToProps )( PaymentRefundPage );
