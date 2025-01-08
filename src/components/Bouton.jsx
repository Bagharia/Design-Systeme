import React from 'react';
import PropTypes from 'prop-types';
import './../stories/Bouton.css';

const Button = ({ size, label, disabled, onClick, ...props }) => {
  const sizeClass = size ? `button--${size}` : '';

  return (
    <button
      className={['button', sizeClass].join(' ')}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: 'medium',
  disabled: false,
  onClick: undefined,
};

export default Button;
