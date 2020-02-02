import React, {Fragment} from 'react';
import { withDefaultLayout } from 'components/layouts'
import { CustomerList } from 'components/blocks';

import { PepperestContext } from 'components/helpers/constant';

const CustomersPage = props => (
  <Fragment>
    <div className="payment">
      <CustomerList />
    </div>
    {/* <PepperestContext.Consumer>
      {context => (context.state.showModal ? <Modal /> : null)}
    </PepperestContext.Consumer> */}
  </Fragment>
);

export default withDefaultLayout(CustomersPage, {});

