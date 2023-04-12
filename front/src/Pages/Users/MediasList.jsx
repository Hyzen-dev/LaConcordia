// Géré par le rôle : photographe, admin

import React from 'react';
import { useParams } from 'react-router-dom';
import UsersDatas from './../../data/Users'

export default function MediasList() {

  const { id } = useParams();

  const user = UsersDatas.find((user) => user.id === parseInt(id));

  return (
    <div id='usersContent'>MediasList</div>
  )
}
