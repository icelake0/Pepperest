import React from 'react';
import { OrderList } from 'components/blocks';
import { orders } from 'libs/constants';


const OrderAll = () => (
  <div className="page-container">
    <OrderList orders={orders} />
  </div>
);

export default OrderAll;
