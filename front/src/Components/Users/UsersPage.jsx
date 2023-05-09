import React, { useEffect } from 'react';
import HeaderUsers from './HeaderUsers.Component';
import NavbarUsers from './NavbarUsers.Component';
import { useNavigate } from 'react-router-dom';

export default function UsersPage(props) {
  const { user, isLogged, logout } = props;
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLogged)
    if (!isLogged || user?.length <= 0) {
      logout()
      navigate('/connexion');
    }
  }, []);
  return (
    <div id='usersPage'>
      <HeaderUsers user={user} />
      <NavbarUsers logout={logout} user={user} />
    </div>
  )
}
