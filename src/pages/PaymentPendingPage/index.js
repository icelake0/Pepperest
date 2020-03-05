import React from 'react';
import { List } from 'components/blocks';
import { payments } from 'libs/constants';

const PaymentPendingPage = () => <List payments={payments} />;

export default PaymentPendingPage;
