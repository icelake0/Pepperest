import React, { useEffect } from 'react';
import { List } from 'components/blocks';
import { STATUS as PaymentStatus } from 'libs/constants/PepperestWebServices/Payments';
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';

const PaymentReleasePage = (props) => {
    useEffect(() => {
        if(!props.loaded) {
            getPayments();
        }
    });

    const getPayments = () => {
        props.onLoadPayments(props.token, props.user, PaymentStatus.RELEASED)
    };
    const refreshData = (params) => {
        props.onLoadPayments(props.token, props.user, PaymentStatus.RELEASED, params)
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
        payments: state.payments[PaymentStatus.RELEASED].payments,
        meta: state.payments[PaymentStatus.RELEASED].meta,
        links: state.payments[PaymentStatus.RELEASED].links,
        links: state.payments[PaymentStatus.RELEASED].links,
        loading: state.payments[PaymentStatus.RELEASED].loading,
        loaded: state.payments[PaymentStatus.RELEASED].loaded
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadPayments: ( token, user, status, extraParams ) => dispatch( actions.loadPayments( token, user, status, extraParams )  )
    };
};
  
export default connect( mapStateToProps, mapDispatchToProps )( PaymentReleasePage );
