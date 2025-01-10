import React from 'react';
import Bouton from './../components/Bouton';
import './Bouton.css'

// Configuration du composant dans Storybook
export default {
  title: 'Components/Bouton', // Le chemin affiché dans Storybook
  component: Bouton, // Le composant à documenter
};

// Création des différentes stories pour les cas d'usage
export const Primary = () => <Bouton label="Default Button" />;
export const PrimaryActive = () => <Bouton className="button--active" label="Active Button" />;
export const PrimaryDisabled = () => <Bouton className="button--disabled" label="Disabled Button" />;
