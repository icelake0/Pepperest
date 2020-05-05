import React from 'react';
import PropTypes from 'prop-types';


const AlertCloseIcon = ({ className, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
    onClick={() => { onClick(); }}
  >
    <path
      fill="#FFF"
      d="M12 0c6.624.008 11.992 5.376 12 12 0 6.628-5.372 12-12 12S0 18.628 0 12 5.372 0 12 0zm0 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5c5.796-.006 10.494-4.704 10.5-10.5 0-5.799-4.701-10.5-10.5-10.5zM6.166 6.148c.298-.288.773-.28 1.061.018L12 10.94l4.773-4.773c.293-.292.768-.292 1.06 0 .293.293.293.768 0 1.061L13.062 12l4.772 4.773c.281.29.281.751 0 1.042-.287.298-.762.306-1.06.019L12 13.06l-4.792 4.79c-.297.289-.772.28-1.06-.017-.288-.299-.28-.773.018-1.061L10.94 12 6.166 7.227l-.018-.019c-.288-.297-.28-.772.018-1.06z"
    />
  </svg>
);

AlertCloseIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};


export default AlertCloseIcon;
