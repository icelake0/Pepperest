import React, { Fragment } from 'react';
import { withDefaultLayout } from 'components/layouts';
import { ProductList } from 'components/blocks';

import { PepperestContext } from 'components/helpers/constant';


const ProductsPage = props => (
  <Fragment>
    <Fragment>
      <div className="payment">
        <ProductList />
      </div>
      {/* <PepperestContext.Consumer>
      {context => (context.state.showModal ? <Modal /> : null)}
    </PepperestContext.Consumer> */}
    </Fragment>
  </Fragment>
);

export default withDefaultLayout(ProductsPage, {});
