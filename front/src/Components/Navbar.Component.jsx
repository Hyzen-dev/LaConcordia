import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <h1>La Concordia</h1>
        <ul>
          <li><Link to={'/'}>Accueil</Link></li>
          <li>Informations
            <ul>
              <li><Link to={'/informations/harmonie-clique'}>Harmonie & Clique</Link></li>
              <li><Link to={'/informations/ecole-de-musique'}>École de musique</Link></li>
              <li><Link to={'/informations/commission'}>Commission</Link></li>
            </ul>
          </li>
          <li><Link to={'/contact'}>Contact</Link></li>
          <li><Link to={'/inscription'}>Espace Membre</Link></li>
        </ul>
    </div>
  )
}
