import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ name ,value, onChange }) => (
  <textarea className="nsForm-textarea" name={name} id={name} value={value} onChange={(e) => { onChange(e); }} />
);

TextArea.defaultProps = {
  value: '',
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
