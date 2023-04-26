import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderUsers() {

  return (
    <header className='headerUsers'>
      <div className='headerUsers__icons'>
        <Link to='espace-membre/notifications'><i className="fa-solid fa-comment link"></i></Link>
        <Link to='espace-membre/messages'><i className="fa-solid fa-envelope link"></i></Link>
      </div>
      <h2 className='headerUsers__title'>Bienvenue UserName</h2>
    </header>
  )
}