import React from 'react';
import { withDefaultLayout } from 'components/layouts';
import { CustomerList } from 'components/blocks';
import { customers } from 'libs/constants';


// import { PepperestContext } from 'components/helpers/constant';

const CustomersPage = () => (
  <>
    <div className="payment">
      <CustomerList
        customers={customers}
      />
    </div>
    {/* <PepperestContext.Consumer>
      {context => (context.state.showModal ? <Modal /> : null)}
    </PepperestContext.Consumer> */}
  </>
);

export default withDefaultLayout(CustomersPage, {});
