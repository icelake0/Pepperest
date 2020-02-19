import React, {Fragment} from 'react';
import { withDefaultLayout } from 'components/layouts';
import { OnBoarding } from 'components/blocks';


const CustomersPageWithOnBoarding = props => (
	<Fragment>
		<OnBoarding
			title="All Customer details saved here for later use"
			info="Create / adding a customer is very easy, click on the add customer"
			buttonText="Add Customer"
			imageUrl="assets/images/svg/customer-onboard.svg"
		/>
	</Fragment>
);

export default withDefaultLayout(CustomersPageWithOnBoarding, {});
