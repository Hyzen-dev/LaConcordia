import React from 'react';
import { Helmet } from 'react-helmet';
import CreateForm from '../../../Components/Forms/CreateForm.Component';

// Page EventsCreate qui affiche le formulaire de création d'un nouvel évènement.

export default function EventsCreate() {
  return (
    <div className='usersPage'>
      <Helmet><title>La Concordia - Évènements</title></Helmet>
        <div id='category'>
          <h2>Évènements</h2>
          <h3>Création d'un nouvel évènement</h3>
        </div>
        <div className='usersPage__content'>
          {/* Intégration du composant "CreateForm" */}
          <CreateForm />
        </div>
      </div>
  )
}
