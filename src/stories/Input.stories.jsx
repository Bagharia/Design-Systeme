import React from 'react';
import Input from './../components/Input';

// Configuration du composant dans Storybook
export default {
  title: 'Components/Input', // Le chemin affiché dans Storybook
  component: Input, // Le composant à documenter
};

// Création des différentes stories pour les cas d'usage
export const Default = () => <Input placeholder="Enter text" />;
export const Disabled = () => <Input placeholder="Disabled input" disabled />;
export const Error = () => <Input placeholder="Enter text" error="This field is required" />;
export const Password = () => <Input type="password" placeholder="Enter password" />;
export const WithValue = () => <Input value="Pre-filled value" />;
