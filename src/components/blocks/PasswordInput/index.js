import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormErrorBoundary } from 'components/blocks';
import { EyeIcon } from 'components/vectors';

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
  hasError,
}) => {
  const [state, setState] = useState({ type: 'password', showPassword: false });

  const handlePasswordToggle = () => {
    if (state.type === 'password') {
      setState({ ...state, type: 'text' });
    } else {
      setState({ ...state, type: 'password' });
    }
  };

  return (
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
          type={state.type}
          id={id}
          className="nsForm-input"
          placeholder={placeholder}
          value={value}
          ref={validation}
          onChange={handleChange(onChange)}
        />
        {hasIcon ? (
          <EyeIcon
            classNames="nsForm-password-icon"
            hasError={hasError}
            onClick={handlePasswordToggle}
          />
        ) : null}
        {hasError && <FormErrorBoundary message={errorMessage} />}
      </div>
    </div>
  );
};

PasswordInput.defaultProps = {
  hasForgotPasswordLabel: false,
  hasIcon: true,
  hasError: false,
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
  errorMessage: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
};

export default PasswordInput;
