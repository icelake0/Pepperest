import React from 'react';
import { withDefaultLayout } from 'components/layouts';
import { OnBoarding } from 'components/blocks';

const PaymentPage = (props) => (
  <>
    <div className="on-boarding-wrapper">
      <OnBoarding
        title="Start sending & Receiving money with Pepperest"
        info="Get on board with Pepperest and start selling to your customers or paying merchants in just a few minutes"
        buttonText="Request Payment"
        imageUrl="assets/images/svg/payment-onboard.svg"
      />
    </div>
  </>
);

export default withDefaultLayout(PaymentPage, {});
