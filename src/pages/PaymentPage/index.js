import React, {Fragment} from 'react'
import {withDefaultLayout}  from 'components/layouts';
import { BankAlert, OnBoardingModal, LoadingListItem } from 'components/blocks';

const PaymentPage = props => (
  <Fragment>
    <BankAlert />
    <OnBoardingModal
      title="Start sending &amp; Receiving money with Pepperest"
      info="Get on board with Pepperest and start selling to your customers or paying merchants in just a few minutes"
      buttonText="Request Payment"
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

export default withDefaultLayout(PaymentPage, {})

