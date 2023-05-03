import React from 'react';
import { Link } from 'react-router-dom';
import HomeNavbar from './HomeNavbar.Component';
import Navbar from './Navbar.Component';

export default function HeaderVisitors(props) {
  const { user } = props;
  return (
    <header id='headerVisitors'>
      <Navbar user={user} />
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
