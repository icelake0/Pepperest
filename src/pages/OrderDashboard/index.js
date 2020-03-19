import React from 'react';
import { OrderListItem, OrderDashboardMetric } from 'components/blocks';
import { orders } from 'libs/constants';
import { getStringHash } from 'libs/utils';

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
const OrderDashboard = () => (
  <>
    <div className="page-container">
      <div className="order-dashboard-metric-wrapper">
        {
          dashboardMetrics.map(({ status, price, title }) => (
            <OrderDashboardMetric
              key={getStringHash(status)}
              status={status}
              price={price}
              title={title}
            />
          ))
        }

      </div>
      <div className="order-dashboard__section-title"> Today Orders</div>

      <div className="order-dashboard__section-title-main">
        <div className="list">
          <div className="list-body">
            {orders
              && orders
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
            {orders
              && orders
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

export default OrderDashboard;
