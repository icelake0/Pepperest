import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ isError, message }) => message && (
  <div className={`alert-wrapper ${isError ? 'alert-error' : 'alert-success'}`}>
    <div className="alert">
      {message}
    </div>
  </div>
);

Alert.defaultProps = {
  isError: false,
};

Alert.propTypes = {
  isError: PropTypes.bool,
  message: PropTypes.string,
};
export default Alert;
