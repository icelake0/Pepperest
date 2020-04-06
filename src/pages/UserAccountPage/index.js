/* eslint-disable import/no-cycle */
import React from 'react';
import { withDefaultLayout } from 'components/layouts';
import { NavLink } from 'components/blocks';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getStringHash } from 'libs/utils';
import { settingsInnerRoutes } from 'config/inner-routes';

import {
  ProfilePage, NotificationPage, BankAccountPage,
  LinkMediaAccountPage, ApiConfigPage, RequestLoanPage,
} from 'pages';

const config = {
  hasAlternateHeader: true,
  links: settingsInnerRoutes,
  page: 'settings',
  isSettings: true,
};


const UserAccountPage = ({ match }) => (
  <div className="user-account">
    <div className="user-account__header">
      <h3 className="text--md">Settings</h3>
    </div>
    <div className="row">
      <div className="col-lg-3 d-none d-lg-flex">
        <ul className="menu__list">
          {settingsInnerRoutes
            && settingsInnerRoutes.map(({ url, title, exact }, index) => (
              <>
                <li className="menu__list-item">
                  <NavLink
                    key={getStringHash}
                    url={url}
                    title={title}
                    exact={exact}
                    classNames=" "
                  />
                </li>
              </>
            ))}
        </ul>
      </div>
      <div className="col-12 col-lg-9">
        <div>
          <Switch>
            <Route path={`${match.url}/profile`} component={ProfilePage} />
            <Route
              path={`${match.url}/notifications`}
              component={NotificationPage}
            />
            <Route
              path={`${match.url}/bank-account`}
              component={BankAccountPage}
            />
            <Route
              path={`${match.url}/linked-media-account`}
              component={LinkMediaAccountPage}
            />
            <Route
              path={`${match.url}/api-configurations`}
              component={ApiConfigPage}
            />
            <Route path={`${match.url}/loans`} component={RequestLoanPage} />
            <Redirect to={`${match.url}/profile`} />
          </Switch>
        </div>
      </div>
    </div>
  </div>
);
export default withDefaultLayout(UserAccountPage, config);
