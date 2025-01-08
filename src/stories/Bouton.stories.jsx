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
export const PrimaryOnHover = () => <Bouton className="button--hover" label="Hover Button" />;
export const PrimaryActive = () => <Bouton className="button--active" label="Active Button" />;
export const PrimaryDisabled = () => <Bouton className="button--disabled" label="Disabled Button" />;
export const Secondary = () => <Bouton className="secondary--button" label="Secondary Button"  />;
export const SecondaryOnHover = () => <Bouton className="secondary--hover" label="Hover Button" />;
export const SecondaryActive = () => <Bouton className="secondary--active" label="Active Button" />;
export const SecondaryDisabled = () => <Bouton className="secondary--disabled" label="Disabled Button" />;
