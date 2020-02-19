import React from 'react';
import { List } from 'components/blocks';
import { payments } from 'libs/constants';

const PaymentTransactionPage = () => <List payments={payments} />;

export default PaymentTransactionPage;
