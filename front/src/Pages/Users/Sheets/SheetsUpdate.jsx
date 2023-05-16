import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import UpdateForm from '../../../Components/Forms/UpdateForm.Component';
import SheetsDatas from './../../../data/Sheets';

export default function SheetsUpdate() {

  const { id } = useParams();

  const sheet = SheetsDatas.find((sheet) => sheet.id === parseInt(id));

  return (
    <div className='usersPage'>
      <Helmet><title>La Concordia - Partitions</title></Helmet>

        <div id='category'>
          <h2>Modification de la partition "{sheet.title}"</h2>
        </div>

        <Link to='/espace-membre/partitions/gestion' className='returnButton'>
          <i class="fa-solid fa-circle-up fa-rotate-270"></i>
        </Link>

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
