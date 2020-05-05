import React from 'react';
import PropTypes from 'prop-types';
import { AlertCloseIcon } from 'components/vectors';

const Alert = ({ isError, message }) => message && (
  <div className={`alert-wrapper ${isError ? 'alert-error' : 'alert-success'}`}>
    <div className="max-container">
      <div className="alert">
        <AlertCloseIcon onClick={null} className="alert-icon" />
        <span className="alert-message">
          {message}
        </span>
      </div>
    </div>
  </div>
);

Alert.defaultProps = {
  isError: false,
};

Alert.propTypes = {
  isError: PropTypes.bool,
  message: PropTypes.string.isRequired,
};
export default Alert;
