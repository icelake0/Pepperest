import React from 'react';
import PropTypes from 'prop-types';
import { FormErrorBoundary } from 'components/blocks';

const handleChange = (onChange) => (event) => {
  // passing back the event to the function from the parent component
  onChange(event);
};

const InputWithoutLabel = ({
  name, type, value, id, classNames, placeholder, onChange, disabled, hasError ,errorMessage,
}) => (
  <>
    <input
      name={name}
      type={type}
      value={value}
      id={id}
      className={`nsForm-input ${classNames} ${disabled ? 'disabled' : ''} ${errorMessage ? 'error' : ''}` }
      placeholder={placeholder}
      onChange={handleChange(onChange)}
      disabled={disabled}
    />
    {hasError && <FormErrorBoundary message={errorMessage} />}
  </>
);

InputWithoutLabel.defaultProps = {
  classNames: '',
  disabled: false,
  hasError: false,
};

InputWithoutLabel.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  classNames: PropTypes.string,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
};
export default InputWithoutLabel;
