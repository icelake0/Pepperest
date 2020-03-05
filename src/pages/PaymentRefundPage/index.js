import React from 'react';
import { List } from 'components/blocks';
import { payments } from 'libs/constants';


const PaymentRefundPage = () => (
  <List
    payments={payments}
  />
);

export default PaymentRefundPage;
