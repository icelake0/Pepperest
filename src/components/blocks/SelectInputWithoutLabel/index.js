import React from 'react'
import PropTypes from 'prop-types'


const SelectInputWithoutLabel = props => (
    <div className={`nsForm-select ${props.classNames ? props.classNames : ''}`}>
      <select name={props.name} id={props.id} onChange={ (event) => {props.onChange(event.target.value)}}> 
      {props.defaultValue ? (<option value="">{props.defaultValue}</option>) : null}
            {props.options.map( (option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
            ))}
      </select>
    </div>
);

SelectInputWithoutLabel.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  classNames: PropTypes.string
};

export default SelectInputWithoutLabel