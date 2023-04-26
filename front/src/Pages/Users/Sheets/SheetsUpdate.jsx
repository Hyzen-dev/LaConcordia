import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import UpdateForm from '../../../Components/Forms/UpdateForm.Component';
import SheetsDatas from './../../../data/Sheets';

export default function SheetsUpdate() {

  const { id } = useParams();

  const sheet = SheetsDatas.find((sheet) => sheet.id === parseInt(id));

  return (
    <div>
      <Helmet><title>La Concordia - Partitions</title></Helmet>

      <div className='usersPage'>
        <div id='category'>
          <h2>Modification de la partition "{sheet.title}"</h2>
        </div>
        <div className='pagePattern'>

          <form action="post">
            <fieldset className='form'>
              <UpdateForm />
            </fieldset>
          </form>

        </div>
      </div>
    </div>
  )
}
