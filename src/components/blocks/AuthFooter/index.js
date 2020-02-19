import React from 'react';
import PropTypes from 'prop-types';


const AuthFooter = ({
  isAlternate, label, url, value,
}) => (
  <div className="auth-option">
    <p className={`auth-option-label ${isAlternate ? 'auth-option-label--alternate' : ''}`}>{label}</p>
    <a href={url} className="pill pill-xs pill--primary">
      {value}
    </a>
  </div>
);

AuthFooter.defaultProps = {
  url: '/',
  isAlternate: false,
};

AuthFooter.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  url: PropTypes.string,
  isAlternate: PropTypes.bool,
};


export default AuthFooter;
