import React, {Fragment} from 'react'
import {withDefaultLayout}  from 'components/layouts';
import { List } from 'components/blocks';
import { paymentInnerRoutes } from 'config/inner-routes'

const PaymentPage = props => (
  <Fragment>
    <div className="payment">
      <List />
    </div>
  </Fragment>
);

export default withDefaultLayout(PaymentPage, { hasAlternateHeader: true, alternateHeaderHasButton: true, links: paymentInnerRoutes})

