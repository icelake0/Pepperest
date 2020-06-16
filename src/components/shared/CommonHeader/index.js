/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { MyCartButton } from 'components/blocks'

const CommonHeader = ({ history, showCart, commonHeaderTitle }) => (
  <div className="nsHeader-alternate">
    <div className="nsHeader-main">
      <h4 className="nsHeader-main-title">{commonHeaderTitle}</h4>
      {
          showCart ? (
           < MyCartButton />
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
