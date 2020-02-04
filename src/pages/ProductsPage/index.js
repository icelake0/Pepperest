import React, { Fragment } from 'react';
import { withDefaultLayout } from 'components/layouts';
import { ProductModal } from 'components/blocks';
import {productInnerRoutes} from 'config/inner-routes';
import { ProductSingleMultiplePage, ProductInstagramPage } from 'pages';
import { Route, Switch, Redirect } from 'react-router-dom';


import { PepperestContext } from 'components/helpers/constant';

const config = {
  hasAlternateHeader: true,
  links: productInnerRoutes,
  page: 'products'
};


const ProductsPage = props => {
  return (
    <Fragment>
      <Fragment>
        <div className="payment">
          <Switch>
            <Route path={`${props.match.url}/single`} component={ProductSingleMultiplePage} />
            <Route path={`${props.match.url}/instagram`} component={ProductInstagramPage} />
            <Redirect to={`${props.match.url}/single`} />
          </Switch>
        </div>
        <PepperestContext.Consumer>
          {context => (context.state.showProductModal ? <ProductModal /> : null)}
        </PepperestContext.Consumer>
      </Fragment>
    </Fragment>
  );
}

export default withDefaultLayout(ProductsPage, config);
