import React, {Fragment} from 'react';
import {withDefaultLayout}  from 'components/layouts';
import { OnBoarding } from 'components/blocks';

const PaymentPage = props => (
	<Fragment>
		<div className="payment">
			<OnBoarding
				title="Start sending & Receiving money with Pepperest"
				info="Get on board with Pepperest and start selling to your customers or paying merchants in just a few minutes"
				buttonText="Request Payment"
				imageUrl="assets/images/svg/payment-onboard.svg"
			/>
		</div>
	</Fragment>
);

export default withDefaultLayout(PaymentPage, {});

