import React from 'react';
import './../stories/Input.css';

const Input = ({
  type = 'text', // Le type d'input (text, password, email, etc.)
  placeholder = '', // Le placeholder de l'input
  value = '', // La valeur de l'input
  onChange, // Fonction appelée quand la valeur change
  disabled = false, // Désactiver ou non l'input
  error = '', // Message d'erreur (affiché si non vide)
}) => {
  return (
    <div className="input-container">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`input ${error ? 'input-error' : ''}`}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default Input;
