import React from 'react';
import PropTypes from 'prop-types';
import { FormErrorBoundary } from 'components/blocks';


const TextArea = ({ name,value, onChange, errorMessage, hasError, validation }) => (
  <>
    <textarea ref={validation} className={`nsForm-textarea ${errorMessage ? 'error' : ''}`} name={name} id={name} value={value} onChange={(e) => { onChange(e); }} />
    {errorMessage && <FormErrorBoundary message={errorMessage} />}
  </>
);

TextArea.defaultProps = {
  value: '',
  hasError: false,
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
};

export default TextArea;
