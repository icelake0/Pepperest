import React from 'react';

import { withDefaultLayout } from 'components/layouts';
import { WhiteTick } from 'components/vectors';
import { getStringHash } from 'libs/utils';

const config = {
  hasAlternateHeader: false,
  hasCommonHeader: true,
  showCart: false,
  commonHeaderTitle: 'Confirmation',
  links: [],
  page: 'checkout',
};
const ConfirmationPage = () => (
  <div className="confirmation">
    <div className="confirmation-content">
      <div className="confirmation-card">
        <div className="confirmation-card-header">
          <div className="confirmation--status">
            <WhiteTick />
          </div>
          <h6>Order Confirmation</h6>
        </div>
        <div className="confirmation-card-body">
          <div className="confirmation-card-body-status">
            <p className="text--smaller text--gray text--center">
              Your Order has been successfully placed, click order ID to view
              more details
            </p>
          </div>
          <div className="confirmation-card-body-order__content">
            <p className="text--xs text--orange text-font--medium">YOUR ORDER NUMBER IS</p>
            <div className="button button-md button--orange-outline">
              PE3424I660660060
            </div>
          </div>
        </div>
        <div className="confirmation-card-body__base">
          <p className="text--smaller text--gray">
            Your will receive an email shortly, Hope you enjoy the items you
            have chosen.
          </p>
          <div className="confirmation-card-body__base-actions">
            <div className="button button-md button--grey">Continue Shopping</div>
            <div className="button button-md button--grey">My Order</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default withDefaultLayout(ConfirmationPage, config);
