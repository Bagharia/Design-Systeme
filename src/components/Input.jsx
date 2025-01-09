import React from 'react';
import PropTypes from 'prop-types';
import './../stories/Input.css';

const Input = React.forwardRef(({ size, label, placeholder, disabled, error, ...props }, ref) => {
  const sizeClass = size ? `input--${size}` : '';
  const errorClass = error ? 'input--error' : '';

  const inputId = label ? label.replace(/\s+/g, '-').toLowerCase() : '';

  return (
    <div className="input-container">
      <h1>Input</h1>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type="text"
        className={['input', sizeClass, errorClass].join(' ')}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={!!error}
        {...props}
      />
      
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
});

Input.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
};

Input.defaultProps = {
  size: 'medium',
  label:'',
  placeholder: 'Enter text...',
  disabled: false,
  error: null,
};

export default Input;