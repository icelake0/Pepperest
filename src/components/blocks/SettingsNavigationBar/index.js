/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { withRouter } from 'react-router-dom';

import { BackArrow } from 'components/vectors';

const SettingsNavigationBar = ({ navBarTitle, history }) => (
  <div className="nsHeader d-flex  align-items-center d-lg-none">
    <div
      onClick={() => {
        history.go(-1);
      }}
    >
      <BackArrow />
    </div>
    <h6 className="text--md text-font--medium text--white ml-3">{navBarTitle}</h6>
  </div>
);

export default withRouter(SettingsNavigationBar);
