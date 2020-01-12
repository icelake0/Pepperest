import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {getStringHash} from 'libs/utils'

import './assets/scss/styles.scss';
import routes from  'config/routes'
function App() {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, component, exact, isProtected }) => {
          return <Route
              key={getStringHash(path)}
              path={path}
              exact={exact}
              component={component}
            />
          
        })}
      </Switch>
    </Router>
  );
}

export default App;
