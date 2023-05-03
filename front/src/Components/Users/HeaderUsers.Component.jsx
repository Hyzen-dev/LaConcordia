import React from 'react';
import { Link } from 'react-router-dom';
import UsersData from './../../data/Users';

export default function HeaderUsers(props) {
  const { user } = props;
  return (
    <header className='headerUsers'>
      <div className='headerUsers__icons'>
        <Link to='espace-membre/notifications'><i className="fa-solid fa-comment link"></i></Link>
        <Link to='espace-membre/messages'><i className="fa-solid fa-envelope link"></i></Link>
      </div>
      <h2 className='headerUsers__title'>Bienvenue {user.firstName} {user.lastName}</h2>
    </header>
  )
}