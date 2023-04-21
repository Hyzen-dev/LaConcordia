// Géré par le rôle : rédacteur, admin

import React from 'react'
import CreateForm from '../../../Components/Forms/CreateForm.Component'

export default function NewsCreate() {
  return (
    <div className='usersPage'>
      <div id='category'>
        <h2>Actualités</h2>
        <h3>Création d'une nouvelle actualité</h3>
      </div>
      <div className='pagePattern'>
        <CreateForm />
      </div>
    </div>
  )
}
