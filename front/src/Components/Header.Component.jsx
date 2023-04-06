import React from 'react';
import Navbar from './Navbar.Component';
import { Link } from 'react-router-dom';
import HomeNavbar from './HomeNavbar.Component';

export default function Header() {
  return (
    <div>
      <Navbar />
      <h2>Souhaitez-vous intégrer notre formation ?</h2>
      <button><Link to={'/inscription'}>Nous rejoindre</Link></button>
      <HomeNavbar />
    </div>
  )
}
