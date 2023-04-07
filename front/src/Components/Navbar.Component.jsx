import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <h1>La Concordia</h1>
        <ul>
          <li><NavLink to={'/'}>Accueil</NavLink></li>
          <li>Informations
            <ul>
              <li><NavLink to={'/informations/harmonie-clique'}>Harmonie & Clique</NavLink></li>
              <li><NavLink to={'/informations/ecole-de-musique'}>École de musique</NavLink></li>
              <li><NavLink to={'/informations/commission'}>Commission</NavLink></li>
            </ul>
          </li>
          <li><NavLink to={'/contact'}>Contact</NavLink></li>
          <li><NavLink to={'/inscription'}>Espace Membre</NavLink></li>
        </ul>
    </div>
  )
}
