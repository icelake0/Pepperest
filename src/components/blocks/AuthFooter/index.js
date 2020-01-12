import React from 'react'
import PropTypes from 'prop-types'


const AuthFooter = props => (
  <div className="auth-option">
    <p className={`auth-option-label ${props.isAlternate ? 'auth-option-label--alternate' : ''}`}>{props.label}</p>
    <a href={props.url} className="pill pill-xs pill--primary">
        {props.value}
    </a>
  </div>
);

AuthFooter.defaultProps = {
  url: '/',
  isAlternate: false
};

AuthFooter.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  url: PropTypes.string,
  isAlternate: PropTypes.bool
};



export default AuthFooter