import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeNavbar() {
  return (
    <ul className='homeNavbar'>
        <li className='homeNavbar__item'>
          <Link to={'/actualites'} className='homeNavbar__link'>
            Actualités
          </Link>
        </li>
        
        <li className='homeNavbar__item'>
          <Link to={'/evenements'} className='homeNavbar__link'>
            Évènements
          </Link>
        </li>

        <li className='homeNavbar__item'>
          <Link to={'/medias'} className='homeNavbar__link'>
            Médias
          </Link>
        </li>

        <li className='homeNavbar__item'>
          <Link to={'/apropos'} className='homeNavbar__link'>
            À propos
          </Link>
        </li>
    </ul>
  )
}
