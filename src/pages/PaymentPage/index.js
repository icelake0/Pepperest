/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import { withDefaultLayout } from 'components/layouts';
import { Modal, ListItemDetailMobileModal } from 'components/blocks';
import { paymentInnerRoutes } from 'config/inner-routes';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  PaymentPendingPage,
  PaymentRefundPage,
  PaymentTransactionPage,
  PaymentReleasePage,
  PaymentStopPage,
} from 'pages';


import { PepperestContext } from 'components/helpers/constant';

const config = {
  hasAlternateHeader: true,
  links: paymentInnerRoutes,
  page: 'payments',
};

const PaymentPage = ({ match }) => (
  <>
    <div className="payment">
      <Switch>
        <Route
          path={`${match.url}/transactions`}
          component={PaymentTransactionPage}
        />
        <Route
          path={`${match.url}/pending`}
          component={PaymentPendingPage}
        />
        <Route
          path={`${match.url}/refund`}
          component={PaymentRefundPage}
        />
        <Route
          path={`${match.url}/release`}
          component={PaymentReleasePage}
        />
        <Route path={`${match.url}/stop`} component={PaymentStopPage} />
        <Redirect to={`${match.url}/transactions`} />
      </Switch>
    </div>
    <PepperestContext.Consumer>
      {(context) => (context.state.showPaymentListModal ? <ListItemDetailMobileModal /> : null)}
    </PepperestContext.Consumer>
    <PepperestContext.Consumer>
      {(context) => (context.state.showPaymentModal ? <Modal /> : null)}
    </PepperestContext.Consumer>
  </>
);

export default withDefaultLayout(PaymentPage, config);
