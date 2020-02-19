import React from 'react';
import PropTypes from 'prop-types';

const handleChange = (onChange) => (event) => {
  onChange(event);
};

const SelectInput = ({ id, name, value, label, options, onChange, defaultValue }) => (
  <div className="nsForm-control">
    <label htmlFor={id}>{label}</label>
    <div className="nsForm-select">
      <select name={name} id={id} onChange={handleChange(onChange)}>
        <option value="">Select an account type</option>
        <option value="">{defaultValue}</option>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  </div>
);

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectInput;
