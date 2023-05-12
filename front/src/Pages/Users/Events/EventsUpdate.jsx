import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import UpdateForm from '../../../Components/Forms/UpdateForm.Component';
import EventsDatas from './../../../data/Events';

export default function EventsUpdate() {

  const { id } = useParams();

  const event = EventsDatas.find((event) => event.id === parseInt(id));

  return (
    <div className='pagePattern'>
      <Helmet><title>La Concordia - Évènements</title></Helmet>

      <div className='usersPage'>
        <div id='category'>
          <h2>Modification de l'évènement "{event.title}"</h2>
        </div>
        <div className='pagePattern__content'>
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
