import React from 'react';
import PropTypes from 'prop-types';

const handleChange = (onChange) => (event) => {
  onChange(event);
};

const SelectInput = ({ id, name, value, label, options, onChange, placeholder, validation, errorMessage }) => (
  <div className="nsForm-control">
    <label htmlFor={id}>{label}</label>
    <div className="nsForm-select">
      <select name={name} id={id} onChange={handleChange(onChange)} value={value} ref={validation}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
    <label>{errorMessage}</label>
  </div>
);

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectInput;
