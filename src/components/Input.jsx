import React from 'react';
import PropTypes from 'prop-types';
import './../stories/Input.css';

const Input = React.forwardRef(({ size, placeholder, disabled, error, ...props }, ref) => {
  const sizeClass = size ? `input--${size}` : '';
  const errorClass = error ? 'input--error' : '';

  return (
    <div className="input-container">
      <label className="input-label">Label</label>
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
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
};

Input.defaultProps = {
  size: 'medium',
  placeholder: 'Enter text...',
  disabled: false,
  error: null,
};

export default Input;