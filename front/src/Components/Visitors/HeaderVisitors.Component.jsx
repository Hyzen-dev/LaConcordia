import React from 'react';
import Navbar from './Navbar.Component';
import { Link } from 'react-router-dom';
import HomeNavbar from './HomeNavbar.Component';

export default function HeaderVisitors() {
  return (
    <header id='headerVisitors'>
      <Navbar />
      <div className='titleContainer'>
        <h2 className='titleContainer__title'>Souhaitez-vous intégrer notre formation ?</h2>
        <button className='titleContainer__button'>
          <Link to={'/inscription'} className='titleContainer__link link'>Nous rejoindre</Link>
        </button>
      </div>
      <HomeNavbar />
    </header>
  )
}
