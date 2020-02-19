import React from 'react';
import PropTypes from 'prop-types';

const handleChange = (onChange) => (event) => {
  // passing back the event to the function from the parent component
  onChange(event);
};

const Input = ({
  name, type, label, placeholder, id, value, onChange,
}) => (
  <div className="nsForm-control">
    <label htmlFor={id}>{label}</label>
    <input
      name={name}
      type={type}
      value={value}
      id={id}
      className="nsForm-input"
      placeholder={placeholder}
      onChange={handleChange(onChange)}
    />
  </div>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Input;
