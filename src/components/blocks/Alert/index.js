import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ isError, message }) => (
  <div className={`alert-wrapper ${isError ? 'alert-error' : 'alert-success'}`}>
    <div className="alert">
      {message}
    </div>
  </div>
);

// {`alert ${isError ? 'alert-error' : 'alert-success'}`}

Alert.defaultProps = {
  isError: false,
};

Alert.propTypes = {
  isError: PropTypes.bool,
  message: PropTypes.string.isRequired,
};
export default Alert;
