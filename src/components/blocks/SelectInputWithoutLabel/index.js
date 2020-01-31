import React from 'react'
import PropTypes from 'prop-types'


const SelectInputWithoutLabel = props => (
    <div className={`nsForm-select ${props.classNames}`}>
      <select name={props.name} id={props.id} onChange={ () => {props.onChange()}}> 
      <option value="">{props.defaultValue}</option>
        <option value="">{props.defaultValue}</option>
            {props.options.map( option => (
                <option value={option.value}>{option.label}</option>
            ))}
      </select>
    </div>
);

SelectInputWithoutLabel.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  classNames: PropTypes.string
};

export default SelectInputWithoutLabel