// Géré par le rôle : Chef, sous-chef, rédacteur, admin

import React from 'react'
import CreateForm from '../../../Components/Forms/CreateForm.Component'

export default function EventsCreate() {
  return (
    <div>
      <div id='category'>
        <h2>Évènements</h2>
        <h3>Création d'un nouvel évènement</h3>
      </div>
      <div className='pagePattern'>
        <CreateForm />
      </div>
    </div>
  )
}
