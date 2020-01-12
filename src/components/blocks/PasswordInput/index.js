import React from 'react'
import PropTypes from 'prop-types'

const handleChange = handleChange => (event) => {
    handleChange(event);
}

const PasswordInput = props => (
  <div className="nsForm-control">
    <div className="d-flex flex-row justify-content-between">
      <label htmlFor={props.id}>{props.label}</label>
      {props.hasForgotPasswordLabel ? (
        <a href="/forgot-password" className="nsForm__label-help">
          Forgot password
        </a>
      ) : null}
    </div>
    <div className="nsForm-password">
      <input
        name={props.name}
        type="password"
        id={props.id}
        className="nsForm-input"
        placeholder={props.placeholder}
        onChange={handleChange(props.onChange)}
      />
      {props.hasIcon ? (
        <img
          src="assets/images/svg/eye.svg"
          className="nsForm-password-icon"
          alt="eye-icon"
        />
      ) : null}
    </div>
  </div>
);

PasswordInput.defaultProps = {
  hasForgotPasswordLabel: false,
  hasIcon: true
}

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  hasForgotPasswordLabel: PropTypes.bool,
  hasIcon: PropTypes.bool
};


export default PasswordInput;