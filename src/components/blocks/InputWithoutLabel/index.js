import React from 'react';
import PropTypes from 'prop-types';
import { FormErrorBoundary, TextArea, SelectInputWithoutLabel } from 'components/blocks';

const handleChange = (onChange) => (event) => {
  // passing back the event to the function from the parent component
  onChange(event);
};

const InputWithoutLabel = ({
  name, type, value, id, classNames, placeholder, onChange, disabled, hasError ,errorMessage, validation, options
}) => {
  let InputComponent = null;
  switch (type) {
    case 'TextArea' :
      InputComponent = 
        <TextArea
          name={name}
          value={value}
          id={id}
          onChange={handleChange(onChange)}
          validation={validation}
      />;
      break;
    case "SelectInputWithoutLabel" :
      InputComponent =
        <SelectInputWithoutLabel
          options={options}
          name={name}
          id={id}
          value={value}
          onChange={handleChange(onChange)}
          validation={validation}
          classNames="nsForm-select__alternate"
        />;
      break;
    case "checkbox":
      InputComponent =
        <>
          <input
            name={name}
            type={type}
            checked={value}
            id={id}
            className={`nsForm-input ${classNames} ${disabled ? 'disabled' : ''} ${errorMessage ? 'error' : ''}` }
            placeholder={placeholder}
            onChange={handleChange(onChange)}
            disabled={disabled}
            ref={validation}
            
          />
          <label htmlFor={name} />
        </>;
    break;
    default :
      InputComponent = 
      <input
        name={name}
        type={type}
        value={value}
        id={id}
        className={`nsForm-input ${classNames} ${disabled ? 'disabled' : ''} ${errorMessage ? 'error' : ''}` }
        placeholder={placeholder}
        onChange={handleChange(onChange)}
        disabled={disabled}
        ref={validation}
      />;
  }
  return (
    <>
      {InputComponent}
      {hasError && <FormErrorBoundary message={errorMessage} />}
    </>
  )
}

InputWithoutLabel.defaultProps = {
  classNames: '',
  disabled: false,
  hasError: false,
  options: []
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
  errorMessage: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
};
export default InputWithoutLabel;
