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
export const Hover = () => <Input className="input--hover" placeholder="Hover input"  />;
export const Required = () => <Input className="input--required"placeholder="Enter text" />;
export const Large = () => <Input className="input--large" placeholder='Large input' />;
export const Medium = () => <Input className="input--medium" placeholder='Medium input' />;
export const Small = () => <Input className="input--small" placeholder='Small input' />;