import React from 'react';
import { withDefaultLayout } from 'components/layouts';
import { OnBoarding } from 'components/blocks';


const ProductPageWithOnBoarding = (props) => (
  <div className="on-boarding-wrapper">
    <OnBoarding
      title="Set up your store in minutes and bring your brand to life"
      info="Get on board with Pepperest and start selling to your customers or paying merchants in just a few minutes"
      buttonText="Add product"
      secondaryButtonText="Import from instagram"
      imageUrl="assets/images/svg/customer-onboard.svg"
    />
  </div>
);

export default withDefaultLayout(ProductPageWithOnBoarding, {});
