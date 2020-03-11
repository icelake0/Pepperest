/* eslint-disable import/no-cycle */
import React from 'react';
import { withDefaultLayout } from 'components/layouts';
import { NavLink } from 'components/blocks';
import { Route, Switch, Redirect } from 'react-router-dom';

import {
  ProfilePage, NotificationPage, BankAccountPage,
  LinkMediaAccountPage, ApiConfigPage, RequestLoanPage,
} from 'pages';

const config = {
  hasAlternateHeader: false,
  links: [],
  page: 'profile',
};

const menus = [
  {
    url: '/user-account/profile',
    title: 'Profile',
    exact: true,
  },
  {
    url: '/user-account/notifications',
    title: 'Notifications',
    exact: true,
  },
  {
    url: '/user-account/bank-account',
    title: 'Bank Account',
    exact: true,
  },
  {
    url: '/user-account/linked-media-account',
    title: 'Linked Media Accounts',
    exact: true,
  },
  {
    url: '/user-account/api-configurations',
    title: 'API Configuration',
    exact: true,
  },
  {
    url: '/user-account/loans',
    title: 'Request Loan',
    exact: true,
  },
];


const UserAccountPage = ({ match }) => (
  <div className="user-account">
    <div className="user-account__header">
      <h3 className="text--md">Settings</h3>
    </div>
    <div className="row">
      <div className="col-lg-3">
        <ul className="menu__list">
          {menus
            && menus.map(({ url, title, exact }) => (
              <>
                <li className="menu__list-item">
                  <NavLink
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
      <div className="col-lg-9">
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
