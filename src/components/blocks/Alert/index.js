import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ isError, message }) => (
  <div className={`alert ${isError ? 'alert-error' : 'alert-success'}`}>
    {message}
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
