// Géré par le rôle : photographe, admin

import React from 'react'
import CreateForm from '../../../Components/Forms/CreateForm.Component'

export default function MediasCreate() {
  return (
    <div className='usersPage'>
      <div id='category'>
        <h2>Médias</h2>
        <h3>Création d'un nouvel album</h3>
      </div>
      <div className='pagePattern'>
        <CreateForm />
      </div>
    </div>
  )
}
