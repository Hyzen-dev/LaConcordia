import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import EventsDatas from './../../../data/Events';

// Page EventsDetail qui retourne le détail de l'évènement sur lequel le visiteur a cliqué.

export default function EventsDetails() {

  // Utilisation du Hook useParams pour récupérer l'id de l'évènement.
  const { id } = useParams();

  // Création de la variable "event" qui recherche dans les données "EventsDatas", l'évènement ayant un id correspondant à l'id présent dans l'url.
  const event = EventsDatas.find((event) => event.id === parseInt(id));

  return (
    <div>
      <Helmet><title>La Concordia - Évènements</title></Helmet>

      <div id='category'>
        <h2>{event.title}</h2>
        <h3>{event.eventDate}</h3>
      </div>
      <div className='pagePattern'>
        <p>{event.content}</p>
      </div>
    </div>
  )
}
