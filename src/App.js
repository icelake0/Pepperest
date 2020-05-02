import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect
} from 'react-router-dom';
import { PageNotFound } from 'pages';
import { getStringHash } from 'libs/utils';
import PepperestProvider from 'components/helpers/PepperestProvider';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

import './assets/scss/styles.scss';
import routes from 'config/routes';

function App(props) {

  useEffect(() => {
    props.onTryAutoSignup();
  });

  return (
    <PepperestProvider>
      <Router>
        <Suspense fallback={<div>Loading....</div>}>
          <Switch>
            {routes.map(({
              path, component, exact, isProtected,
            }) => (
              !isProtected || props.isAuthenticated ?
              <Route
                key={getStringHash(path)}
                path={path}
                exact={exact}
                component={component}
              /> : <Redirect key={getStringHash(path)} from = {path} to={"/login"} />
            ))}
            <Route path="/404" component={PageNotFound} />
            <Redirect to={{ pathname: '/404' }} />
          </Switch>
        </Suspense>
      </Router>
    </PepperestProvider>
  );
}

const mapStateToProps = state => {
  return {
      isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default ( connect( mapStateToProps, mapDispatchToProps )( App ) );
