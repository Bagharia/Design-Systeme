import React from 'react';
import Input from './../components/Input';
import './Input.css'

// Configuration du composant dans Storybook
export default {
  title: 'Components/Input', // Le chemin affiché dans Storybook
  component: Input, // Le composant à documenter
};

// Création des différentes stories pour les cas d'usage
export const Default = () => <Input placeholder="Enter text" />;
export const Hover = () => <Input placeholder="Hover input"  />;
export const Focus = () => {
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return <Input ref={inputRef} placeholder="Focus state input" />;
};
export const Disabled = () => <Input placeholder="Disabled input" disabled />;
export const Error = () => <Input placeholder="Enter text" error="This field is required" />;
export const Large = () => <Input className="input--large" placeholder='Large input' />;
export const Medium = () => <Input className="input--medium" placeholder='Medium input' />;
export const Small = () => <Input className="input--small" placeholder='Small input' />;