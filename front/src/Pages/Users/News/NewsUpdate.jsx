import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import NewsDatas from './../../../data/News';
import UpdateForm from '../../../Components/Forms/UpdateForm.Component';

export default function NewsUpdate() {

  const { id } = useParams();

  const news = NewsDatas.find((news) => news.id === parseInt(id));

  return (
    <div>
      <Helmet><title>La Concordia - Actualié</title></Helmet>

      <div className='usersPage'>
        <div id='category'>
          <h2>Modification de l'actualité "{news.title}"</h2>
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
