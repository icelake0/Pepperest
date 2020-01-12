import React from 'react'
import PropTypes from 'prop-types'

const handleChange = handleChange => event => {
    handleChange(event);
}

const SelectInput = props => (
  <div className="nsForm-control">
    <label htmlFor={props.id}>{props.label}</label>
    <div className="nsForm-select">
      <select name={props.name} id={props.id} onChange={handleChange(props.onChange)}> 
      <option value="">Select an account type</option>
        <option value="">{props.defaultValue}</option>
            {props.options.map( option => (
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
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectInput;