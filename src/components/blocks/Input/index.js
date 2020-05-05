import React from 'react';
import PropTypes from 'prop-types';
import {FormErrorBoundary} from 'components/blocks';

const handleChange = (onChange) => (event) => {
  // passing back the event to the function from the parent component
  onChange(event);
};

const Input = ({
  name, type, label, placeholder, id, value, onChange, validation, errorMessage, hasError
}) => (
  <div className="nsForm-control">
    <label htmlFor={id}>{label}</label>
    <input
      name={name}
      type={type}
      value={value}
      id={id}
      className={`nsForm-input ${errorMessage ? 'error' : ''}`}
      placeholder={placeholder}
      ref={validation}
      onChange={handleChange(onChange)}
    />
    {hasError && <FormErrorBoundary message={errorMessage} />}
  </div>
);

Input.defaultProps = {
  hasError: false,
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
};
export default Input;
