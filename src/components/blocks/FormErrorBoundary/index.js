import React from 'react';
import { ErrorIcon } from 'components/vectors';
import PropTypes from 'prop-types';

const FormErrorBoundary = ({ message }) => (
  <div className="nsForm-error__boundary">
    <ErrorIcon />
    <span className="nsForm-error__boundary-message">{message}</span>
  </div>
);

FormErrorBoundary.propTypes = {
  message: PropTypes.string.isRequired,
};

export default FormErrorBoundary;
