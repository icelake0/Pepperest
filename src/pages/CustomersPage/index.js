import React from 'react';
import { withDefaultLayout } from 'components/layouts';
import {
  CustomerList,
  CustomerListItemDetailMobileModal,
  FilterByModal,
  SortByModal,
} from 'components/blocks';
import { customers } from 'libs/constants';


import { PepperestContext } from 'components/helpers/constant';

const CustomersPage = () => (
  <>
    <div className="page-container">
      <CustomerList customers={customers} />
    </div>
    <PepperestContext.Consumer>
      {(context) => (context.state.showCustomerListModal ? (
        <CustomerListItemDetailMobileModal />
      ) : null)}
    </PepperestContext.Consumer>
    <PepperestContext.Consumer>
      {(context) => (context.state.showFilterModal ? <FilterByModal /> : null)}
    </PepperestContext.Consumer>
    <PepperestContext.Consumer>
      {(context) => (context.state.showSortModal ? <SortByModal /> : null)}
    </PepperestContext.Consumer>
  </>
);

export default withDefaultLayout(CustomersPage, {});
