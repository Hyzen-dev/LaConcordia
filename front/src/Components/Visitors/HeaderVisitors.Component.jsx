import React from 'react';
import { Link } from 'react-router-dom';
import HomeNavbar from './HomeNavbar.Component';
import Navbar from './Navbar.Component';

export default function HeaderVisitors(props) {
  const { isLogged } = props;
  return (
    <header id='headerVisitors'>
      <Navbar isLogged={isLogged} />
      <div className='titleContainer'>
        <h2 className='titleContainer__title'>Souhaitez-vous intégrer notre formation ?</h2>
        <button className='greenButton headerVisitorButton'>
          <Link to={'/inscription'} className='titleContainer__link link'>Nous rejoindre</Link>
        </button>
      </div>
      <HomeNavbar />
    </header>
  )
}
