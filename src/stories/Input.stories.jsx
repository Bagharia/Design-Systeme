import React from 'react';
import Input from './../components/Input.jsx';
import './Input.css'

// Configuration du composant dans Storybook
export default {
  title: 'Components/Input', // Le chemin affiché dans Storybook
  component: Input, // Le composant à documenter
};

// Création des différentes stories pour les cas d'usage
export const Default = () => <Input label="Label" placeholder="PlaceHolder" />;
export const Password_Input = () => <Input label="Mot de passe" type="password" placeholder="Password"  />;
export const Email_Input = () => <Input label="Email" type="email" placeholder="name@example.co" />;
export const Required_Field = () => <Input label="*Label" className="input--required" placeholder='Placeholder' />;
export const Error = () => <Input label="Erreur" className="input--error" placeholder='Error input' />;
export const Focus = () => <Input label="Focus" className="input--focus" placeholder="Focus Input"/>