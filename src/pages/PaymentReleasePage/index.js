import React from 'react';
import { List } from 'components/blocks';
import { payments } from 'libs/constants';


const PaymentReleasePage = () => <List payments={payments} />;

export default PaymentReleasePage;
