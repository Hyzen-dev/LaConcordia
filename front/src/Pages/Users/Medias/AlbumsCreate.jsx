import React from 'react';
import { Helmet } from 'react-helmet';
import CreateForm from '../../../Components/Forms/CreateForm.Component';
import { Link } from 'react-router-dom';

// Page AlbumsCreate qui affiche le formulaire de création d'un nouvel album médias.

export default function AlbumsCreate() {
  return (
    <div className='usersPage'>
      <Helmet><title>La Concordia - Galerie médias</title></Helmet>

        <div id='category'>
          <h2>Médias</h2>
          <h3>Création d'un nouvel album</h3>
        </div>
        <Link to='/espace-membre/medias/gestion' className='returnButton'>
          <i class="fa-solid fa-circle-up fa-rotate-270"></i>
        </Link>
        <div className='usersPage__content'>
          {/* Intégration du composant "CreateForm" */}
          <CreateForm />
        </div>
      </div>
  )
}
