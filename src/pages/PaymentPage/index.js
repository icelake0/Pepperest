import React, {Fragment} from 'react'
import {withDefaultLayout}  from 'components/layouts';
import { Modal } from 'components/blocks';
import { paymentInnerRoutes } from 'config/inner-routes'
import { Route, Switch, Redirect } from 'react-router-dom';
import {PaymentPendingPage,
  PaymentRefundPage,
  PaymentTransactionPage,
  PaymentReleasePage,
  PaymentStopPage} from 'pages';


import { PepperestContext } from 'components/helpers/constant';

const config = {
  hasAlternateHeader: true,
  links: paymentInnerRoutes,
  page: 'payments',
};

const PaymentPage = props => {
  return (
    <Fragment>
      <div className="payment">
        <Switch>
          <Route
            path={`${props.match.url}/transactions`}
            component={PaymentTransactionPage}
          />
          <Route
            path={`${props.match.url}/pending`}
            component={PaymentPendingPage}
          />
          <Route
            path={`${props.match.url}/refund`}
            component={PaymentRefundPage}
          />
          <Route
            path={`${props.match.url}/release`}
            component={PaymentReleasePage}
          />
          <Route path={`${props.match.url}/stop`} component={PaymentStopPage} />
          <Redirect to={`${props.match.url}/transactions`} />
        </Switch>
      </div>
      <PepperestContext.Consumer>
        {context => (context.state.showPaymentModal ? <Modal /> : null)}
      </PepperestContext.Consumer>
    </Fragment>
  );
}

export default withDefaultLayout(PaymentPage, config)

