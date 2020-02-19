/* eslint-disable react/button-has-type */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const onClick = (handleClick) => (event) => {
  handleClick(event);
};

const Button = ({
  name, type, handleClick, value,
}) => (
  <div className="nsForm-control">
    <button
      type={type}
      name={name}
      className="button button--orange"
      onClick={onClick(handleClick)}
    >
      {value}
    </button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
