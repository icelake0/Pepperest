import React, { useEffect } from 'react';
import { OrderList } from 'components/blocks';
import { PAGE_TYPES as OrdersPageTypes } from 'libs/constants/PepperestWebServices/Orders';
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';


const OrderPending = (props) => {
  useEffect(() => {
    if(!props.loaded && !props.loading) {
          getOrders();
      }
  });

  const getOrders = () => {
      props.onLoadOrders(props.token, props.user, OrdersPageTypes.PENDING)
  };
  const refreshData = (params) => {
      props.onLoadOrders(props.token, props.user, OrdersPageTypes.PENDING, params)
  };

  return <div className="page-container">
            <OrderList orders={props.orders} 
                meta = {props.meta} 
                links = {props.links} 
                refreshData = {(params) => refreshData(params)}
                loading = {props.loading}/>
          </div>
};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    user: state.auth.userInfo,
    orders: state.orders[OrdersPageTypes.PENDING].orders,
    meta: state.orders[OrdersPageTypes.PENDING].meta,
    links: state.orders[OrdersPageTypes.PENDING].links,
    links: state.orders[OrdersPageTypes.PENDING].links,
    loading: state.orders[OrdersPageTypes.PENDING].loading,
    loaded: state.orders[OrdersPageTypes.PENDING].loaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onLoadOrders: ( token, user, pageType, extraParams ) => dispatch( actions.loadOrders( token, user, pageType, extraParams )  )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( OrderPending );
