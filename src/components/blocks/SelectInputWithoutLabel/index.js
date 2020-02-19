import React from 'react';
import PropTypes from 'prop-types';
import { getStringHash } from 'libs/utils';


const SelectInputWithoutLabel = ({
  id, value, name, defaultValue, options, classNames, onChange
}) => (
  <div className={`nsForm-select ${classNames || ''}`}>
    <select name={name} id={id} value={value} onChange={(event) => { onChange(event.target.value); }}>
      {defaultValue ? (<option value="">{defaultValue}</option>) : null}
      {options.map((option, index) => (
        <option key={getStringHash(index)} value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);

SelectInputWithoutLabel.defaultProps = {
  classNames: '',
};

SelectInputWithoutLabel.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChange: PropTypes.func.isRequired,
  classNames: PropTypes.string,
};

export default SelectInputWithoutLabel;
