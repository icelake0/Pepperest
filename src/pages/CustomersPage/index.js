import React, {Fragment} from 'react';
import { withDefaultLayout } from 'components/layouts';
import { OnBoardingModal, LoadingListItem } from 'components/blocks';


const CustomersPage = props => (
  <Fragment>
    <OnBoardingModal
      title="All Customer details saved here for later use"
      info="Create / adding a customer is very easy, click on the add customer"
      buttonText="Add Customer"
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

export default withDefaultLayout(CustomersPage, {});
