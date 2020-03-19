import React from 'react';
import PropTypes from 'prop-types';
import {
  OrderCancelIcon, OrderPendingIcon, OrderShippedIcon, OrderTotalIcon,
} from 'components/vectors';

const determineIcon = (status) => {
  switch (status) {
    case 'total':
      return <OrderTotalIcon />;
    case 'pending':
      return <OrderPendingIcon />;
    case 'cancel':
      return <OrderCancelIcon />;
    case 'shipped':
      return <OrderShippedIcon />;
    default:
      return <OrderTotalIcon />;
  }
};

const OrderDashboardMetric = ({ status, price, title }) => (
  <div className="order-dashboard-metric">
    {determineIcon(status)}
    <div className="order-dashboard-metric__content">
      <h3 className="order-dashboard-metric__content-price">
        {
            status !== 'cancel' ? `N ${price}` : `${price}`
        }
      </h3>
      <p className="order-dashboard-metric__content-title">{title}</p>
    </div>
    <div className="order-dashboard-metric-divider" />
  </div>
);


OrderDashboardMetric.propTypes = {
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default OrderDashboardMetric;
