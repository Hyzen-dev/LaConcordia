import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeNavbar() {
  return (
    <ul>
        <li><Link to={'/actualites'}>Actualités</Link></li>
        <li><Link to={'/evenements'}>Évènements</Link></li>
        <li><Link to={'/medias'}>Médias</Link></li>
        <li><Link to={'/apropos'}>À propos</Link></li>
    </ul>
  )
}
