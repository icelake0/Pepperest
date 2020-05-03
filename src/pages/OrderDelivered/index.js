import React, { useEffect } from 'react';
import { OrderList } from 'components/blocks';
import { PAGE_TYPES as OrdersPageTypes } from 'libs/constants/PepperestWebServices/Orders';
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';


const OrderDelivered = (props) => {
  useEffect(() => {
    if(!props.loaded && !props.loading) {
          getOrders();
      }
  });

  const getOrders = () => {
      props.onLoadOrders(props.token, props.user, OrdersPageTypes.DELIVERED)
  };
  const refreshData = (params) => {
      props.onLoadOrders(props.token, props.user, OrdersPageTypes.DELIVERED, params)
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
    orders: state.orders[OrdersPageTypes.DELIVERED].orders,
    meta: state.orders[OrdersPageTypes.DELIVERED].meta,
    links: state.orders[OrdersPageTypes.DELIVERED].links,
    links: state.orders[OrdersPageTypes.DELIVERED].links,
    loading: state.orders[OrdersPageTypes.DELIVERED].loading,
    loaded: state.orders[OrdersPageTypes.DELIVERED].loaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onLoadOrders: ( token, user, pageType, extraParams ) => dispatch( actions.loadOrders( token, user, pageType, extraParams )  )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( OrderDelivered );
