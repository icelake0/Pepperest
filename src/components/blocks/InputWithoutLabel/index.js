import React from 'react';
import PropTypes from 'prop-types';

const handleChange = handleChange => event => {
  // passing back the event to the function from the parent component
  handleChange(event);
};

const InputWithoutLabel = props => (
  <input
    name={props.name}
    type={props.type}
    value={props.value}
    id={props.id}
    className={`nsForm-input ${props.classNames}`}
    placeholder={props.placeholder}
    onChange={handleChange(props.onChange)}
  />
);

InputWithoutLabel.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  classNames: PropTypes.string
};
export default InputWithoutLabel;
