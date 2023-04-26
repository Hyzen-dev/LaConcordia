import React from 'react';
import { Helmet } from 'react-helmet';
import CreateForm from '../../../Components/Forms/CreateForm.Component';

// Page SheetsCreate qui affiche le formulaire de création d'une nouvelle partition.

export default function SheetsCreate() {
  return (
    <div>
      <Helmet><title>La Concordia - Partitions</title></Helmet>

      <div className='usersPage'>
        <div id='category'>
          <h2>Partitions</h2>
          <h3>Ajouter une nouvelle partition</h3>
        </div>
        <div className='pagePattern'>
          {/* Intégration du composant "CreateForm" */}
          <CreateForm />
        </div>
      </div>
    </div>
  )
}
