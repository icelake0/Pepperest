import React from 'react'
import PropTypes from 'prop-types'

const handleClick = handleClick => event => {
    handleClick(event);
}

const Button = props => (
  <div className="nsForm-control">
    <button
        name={props.name}
        type={props.type}
        className="button button--orange"
        onClick={handleClick(props.handleClick)}>
            {props.value}
        </button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Button;