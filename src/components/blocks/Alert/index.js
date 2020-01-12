import React from 'react';
import PropTypes from 'prop-types'

const Alert = props => (
    <div className={`alert ${props.isError ? 'alert-error' : 'alert-success'}`}>
        {props.message}
    </div>
)

Alert.defaultProps = {
  isError: false
};

Alert.propTypes = {
  isError: PropTypes.bool,
  message: PropTypes.string.isRequired
};
export default Alert;