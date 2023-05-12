import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import UpdateForm from '../../../Components/Forms/UpdateForm.Component';
import AlbumsDatas from './../../../data/Albums';

export default function AlbumUpdate() {

  const { id } = useParams();

  const album = AlbumsDatas.find((album) => album.id === parseInt(id));

  return (
    <div className='usersPage'>
      <Helmet><title>La Concordia - Galerie médias</title></Helmet>

        <div id='category'>
          <h2>Modification de l'album <br /> "{album.name}"</h2>
        </div>
        <div className='usersPage__content'>
          <form action="post">
            <fieldset className='form'>
              <UpdateForm />
            </fieldset>
          </form>
        </div>
      </div>
  )
}
