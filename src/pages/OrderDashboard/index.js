import React, { useEffect } from 'react';
import { OrderListItem, OrderDashboardMetric } from 'components/blocks';
import { getStringHash } from 'libs/utils';
import { PAGE_TYPES as OrdersPageTypes } from 'libs/constants/PepperestWebServices/Orders';
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';

const dashboardMetrics = [
  {
    status: 'total',
    price: '23,000',
    title: 'Total Order',
  },
  {
    status: 'cancel',
    price: '0',
    title: 'Canceled',
  },
  {
    status: 'pending',
    price: '200',
    title: 'Pending Order',
  },
  {
    status: 'shipped',
    price: '13,000',
    title: 'Shipped',
  },
];
const OrderDashboard = (props) => {
  useEffect(() => {
    if(!props.loaded && !props.loading) {
          getOrders();
      }
  });

  const getOrders = () => {
      props.onLoadOrders(props.token, props.user, OrdersPageTypes.DASHBOARD)
  };

  return (
    <>
      <div className="page-container">
        <div className="order-dashboard-metric-wrapper">
          {
            dashboardMetrics.map(({ status, price, title }) => (
              <OrderDashboardMetric
                key={getStringHash(status)}
                status={status}
                price={props[status]}
                title={title}
              />
            ))
          }
  
        </div>
        <div className="order-dashboard__section-title"> Today Orders</div>
  
        <div className="order-dashboard__section-title-main">
          <div className="list">
            <div className="list-body">
              {props.todayOrders
                && props.todayOrders
                  .slice(0, 9)
                  .map(({
                    status, date, address, orderId, cost,
                  }) => (
                    <OrderListItem
                      key={getStringHash(status)}
                      status={status}
                      date={date}
                      address={address}
                      orderId={orderId}
                      cost={cost}
                    />
                  ))}
            </div>
          </div>
        </div>
        <div className="order-dashboard__section-title"> Yesterday Orders</div>
        <div className="order-dashboard__section-title-main">
          <div className="list">
            <div className="list-body">
              {props.yesterdayOrders
                && props.yesterdayOrders
                  .slice(0, 9)
                  .map(({
                    status, date, address, orderId, cost,
                  }) => (
                    <OrderListItem
                      key={getStringHash(status)}
                      status={status}
                      date={date}
                      address={address}
                      orderId={orderId}
                      cost={cost}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    user: state.auth.userInfo,
    todayOrders: state.orders[OrdersPageTypes.DASHBOARD].today_orders,
    yesterdayOrders: state.orders[OrdersPageTypes.DASHBOARD].yesterday_orders,
    total: state.orders[OrdersPageTypes.DASHBOARD].total,
    cancel: state.orders[OrdersPageTypes.DASHBOARD].canceled,
    pending: state.orders[OrdersPageTypes.DASHBOARD].pending,
    shipped: state.orders[OrdersPageTypes.DASHBOARD].shipped,
    loading: state.orders[OrdersPageTypes.DASHBOARD].loading,
    loaded: state.orders[OrdersPageTypes.DASHBOARD].loaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onLoadOrders: ( token, user, pageType, extraParams ) => dispatch( actions.loadOrders( token, user, pageType, extraParams )  )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( OrderDashboard );
