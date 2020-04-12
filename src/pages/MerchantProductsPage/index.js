import React from 'react';
import { withDefaultLayout } from 'components/layouts';

const config = {
  hasAlternateHeader: false,
  links: [],
  page: 'merchantProducts',
};
const MerchantProductsPage = () => <div>products works</div>;

export default withDefaultLayout(MerchantProductsPage, config);
