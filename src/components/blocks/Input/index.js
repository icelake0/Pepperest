import React from 'react';
import PropTypes from 'prop-types'

const handleChange = handleChange => event => {
    // passing back the event to the function from the parent component
    handleChange(event);
}

const Input = (props) => (
  <div className="nsForm-control">
    <label htmlFor={props.id}>{props.label}</label>
    <input
      name={props.name}
      type={props.type}
      value={props.value}
      id = {props.id}
      className="nsForm-input"
      placeholder={props.placeholder}
      onChange={ handleChange(props.onChange)}
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
  onChange: PropTypes.func.isRequired
};
export default Input;
