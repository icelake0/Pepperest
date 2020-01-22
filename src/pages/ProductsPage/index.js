import React, {Fragment} from 'react';
import { withDefaultLayout } from 'components/layouts';
import { BankAlert, OnBoardingModal, LoadingListItem } from 'components/blocks';


const ProductsPage = props => (
  <Fragment>
    <BankAlert />
    <OnBoardingModal
      title="Set up your store in minutes and bring your brand to life"
      info="Get on board with Pepperest and start selling to your customers or paying merchants in just a few minutes"
      buttonText="Add product"
      imageUrl="assets/images/svg/customer-onboard.svg"
    />
    <LoadingListItem />
    <LoadingListItem styleNumber={2} />
    <LoadingListItem />
    <LoadingListItem styleNumber={3} />
    <LoadingListItem styleNumber={2} />
    <LoadingListItem />
    <LoadingListItem styleNumber={3} />
  </Fragment>
);

export default withDefaultLayout(ProductsPage, {});
