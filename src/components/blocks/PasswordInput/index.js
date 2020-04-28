import React from 'react';
import PropTypes from 'prop-types';

const handleChange = (onChange) => (event) => {
  onChange(event);
};

const PasswordInput = ({
  id,
  value,
  name,
  label,
  placeholder,
  onChange,
  hasForgotPasswordLabel,
  hasIcon,
  validation,
  errorMessage,
}) => (
  <div className="nsForm-control">
    <div className="d-flex flex-row justify-content-between">
      <label htmlFor={id}>{label}</label>
      {hasForgotPasswordLabel ? (
        <a href="/forgot-password" className="nsForm__label-help">
          Forgot password
        </a>
      ) : null}
    </div>
    <div className="nsForm-password">
      <input
        name={name}
        type="password"
        id={id}
        className="nsForm-input"
        placeholder={placeholder}
        value={value}
        ref = {validation}
        onChange={handleChange(onChange)}
      />
      {hasIcon ? (
        <img
          src="assets/images/svg/eye.svg"
          className="nsForm-password-icon"
          alt="eye-icon"
        />
      ) : null}
      <label>{errorMessage}</label>
    </div>
  </div>
);

PasswordInput.defaultProps = {
  hasForgotPasswordLabel: false,
  hasIcon: true,
};

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  hasForgotPasswordLabel: PropTypes.bool,
  hasIcon: PropTypes.bool,
};

export default PasswordInput;
