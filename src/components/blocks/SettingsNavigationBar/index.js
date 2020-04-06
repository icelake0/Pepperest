/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { withRouter } from 'react-router-dom';

import { BackArrow } from 'components/vectors';

const SettingsNavigationBar = (props) => {
  const { history } = props;
  return (
    <div className="nsHeader d-flex  align-items-center d-lg-none">
      <div onClick={() => { history.push('/payments'); }}>
        <BackArrow />
      </div>
      <h6 className="text--md text-font--medium text--white ml-3">Settings</h6>
    </div>
  );
};

export default withRouter(SettingsNavigationBar);
