import React from 'react';
import PropTypes from 'prop-types';

const handleChange = (onChange) => (event) => {
  // passing back the event to the function from the parent component
  onChange(event);
};

const InputWithoutLabel = ({
  name, type, value, id, classNames, placeholder, onChange, disabled
}) => (
  <input
    name={name}
    type={type}
    value={value}
    id={id}
    className={`nsForm-input ${classNames} ${disabled ? 'disabled' : ''}`}
    placeholder={placeholder}
    onChange={handleChange(onChange)}
    disabled={disabled}
  />
);

InputWithoutLabel.defaultProps = {
  classNames: '',
  disabled: false,
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
};
export default InputWithoutLabel;
