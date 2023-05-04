import React from 'react';
import HeaderUsers from './HeaderUsers.Component';
import NavbarUsers from './NavbarUsers.Component';


export default function UsersPage(props) {
  const { user } = props;
  return (
    <div id='usersPage'>
      <HeaderUsers user={user} />
      <NavbarUsers user={user} />
    </div>
  )
}
