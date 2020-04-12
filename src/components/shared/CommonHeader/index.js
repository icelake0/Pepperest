/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const CommonHeader = ({ history, showCart, commonHeaderTitle }) => (
  <div className="nsHeader-alternate">
    <div className="nsHeader-main">
<h4 className="text--md text--black text-font--medium">{commonHeaderTitle}</h4>
      {
          showCart ? (
            <div role="button" tabIndex="0" className="button button-md button--orange d-flex flex-row" onClick={() => { history.push('/checkout'); }}>
              My Cart
              <div className="mBadge-alt">12</div>
            </div>
          ) : null
      }
    </div>
  </div>
);

CommonHeader.defaultProps = {
  showCart: false,
};

CommonHeader.propTypes = {
  showCart: PropTypes.bool,
  commonHeaderTitle: PropTypes.string.isRequired,
};

export default withRouter(CommonHeader);
