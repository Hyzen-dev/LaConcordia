import React from 'react'
import CreateForm from '../../../Components/Forms/CreateForm.Component'

// Page NewsCreate qui affiche le formulaire de création d'une nouvelle actualité.

export default function NewsCreate() {
  return (
    <div className='usersPage'>
      <div id='category'>
        <h2>Actualités</h2>
        <h3>Création d'une nouvelle actualité</h3>
      </div>
      <div className='pagePattern'>
        {/* Intégration du composant "CreateForm" */}
        <CreateForm />
      </div>
    </div>
  )
}
