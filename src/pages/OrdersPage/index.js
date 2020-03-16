import React from 'react';
import { withDefaultLayout } from 'components/layouts';
import { ordersInnerRoutes } from 'config/inner-routes';
import { OrderDashboard, OrderAll } from 'pages';
import { Route, Switch, Redirect } from 'react-router-dom';


const config = {
  hasAlternateHeader: true,
  links: ordersInnerRoutes,
  page: 'orders',
};
const OrdersPage = ({ match }) => (
  <>
    <div className="">
      <Switch>
        <Route path={`${match.url}/dashboard`} component={OrderDashboard} />
        <Route path={`${match.url}/all`} component={OrderAll} />
        <Route path={`${match.url}/cancel`} component={OrderAll} />
        <Route path={`${match.url}/pending`} component={OrderAll} />
        <Route path={`${match.url}/shipped`} component={OrderAll} />
        <Route path={`${match.url}/delivered`} component={OrderAll} />
        <Redirect to={`${match.url}/dashboard`} />
      </Switch>
    </div>
  </>
);

export default withDefaultLayout(OrdersPage, config);
