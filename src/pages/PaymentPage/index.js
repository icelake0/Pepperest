import React, {Fragment} from 'react'
import {withDefaultLayout}  from 'components/layouts';
import { List, Modal } from 'components/blocks';
import { paymentInnerRoutes } from 'config/inner-routes'

import { PepperestContext } from 'components/helpers/constant';

const PaymentPage = props => (
  <Fragment>
    <div className="payment">
      <List />
    </div>
    <PepperestContext.Consumer>
      {context => (context.state.showModal ? <Modal /> : null)}
    </PepperestContext.Consumer>
  </Fragment>
);

export default withDefaultLayout(PaymentPage, { hasAlternateHeader: true, alternateHeaderHasButton: true, links: paymentInnerRoutes})

