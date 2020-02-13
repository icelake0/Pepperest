import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {PageNotFound} from 'pages'
import {getStringHash} from 'libs/utils'
import PepperestProvider from 'components/helpers/PepperestProvider';

import './assets/scss/styles.scss';
import routes from  'config/routes'
function App() {
  return (
    <PepperestProvider>
      <Router>
        <Switch>
          {routes.map(({ path, component, exact, isProtected }) => {
            return (
              <Route
                key={getStringHash(path)}
                path={path}
                exact={exact}
                component={component}
              />
            );
          })}
          <Route path="/404" component={PageNotFound} />
          <Redirect to={{ pathname: '/404' }} />
        </Switch>
      </Router>
    </PepperestProvider>
  );
}

export default App;
