import React from 'react'
import PropTypes from 'prop-types'

const TextArea = props => (
    <textarea className="nsForm-textarea" name={props.name} id={props.name} value={props.value} onChange={(e) => {props.onChange()}}></textarea>
)

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default TextArea;