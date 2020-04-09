import React from 'react';
import { withDefaultLayout } from 'components/layouts';
import {
  CustomerList,
  CustomerListItemDetailMobileModal,
} from 'components/blocks';
import { customers } from 'libs/constants';


import { PepperestContext } from 'components/helpers/constant';

const CustomersPage = () => (
  <>
    <div className="payment">
      <CustomerList
        customers={customers}
      />
    </div>
    <PepperestContext.Consumer>
      {context => (context.state.showCustomerListModal ? <CustomerListItemDetailMobileModal /> : null)}
    </PepperestContext.Consumer>
  </>
);

export default withDefaultLayout(CustomersPage, {});
