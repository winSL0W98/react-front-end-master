import React from 'react';
import PropTypes from 'prop-types';

const TextFieldGroup = (
    {onChange,
      error,
      name,
      label,
      placeholder,
      type,
      value,
      checkUserExists}
) => {
  return (
      <div className = "Form-group-field">
        <label
            className = "Form-group-label"
            htmlFor = {name}>
          {label}
        </label>
        <input
            className = { error ?
                "Form-group-input Form-group-input_error"
                : "Form-group-input"}
            type = {type}
            id = {name}
            name = {name}
            value = {value}
            onChange = {onChange}
            onBlur = {checkUserExists}
            placeholder = {placeholder}
        />
        { error && <span className = "Form-group-error">{error}</span> }
      </div>
  )
}

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checkUserExists: PropTypes.func
}

TextFieldGroup.defaultProps = {
  type : 'text',
  placeholder : 'example'
}

export default TextFieldGroup;
