import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useApi } from '../../../Router';
import MainLoadingScreen from '../../../Components/LoadingScreen/MainLoadingScreen.Component';

// Page EventsDetail qui retourne le détail de l'évènement sur lequel le visiteur a cliqué.

export default function EventsDetails() {

  const [event, setEvent] = useState({})
  const { id } = useParams();

  const fetchEvent = async () => {
    const response = await useApi.events.GetById({ id: parseInt(id) });
    return setEvent(response.data.data);
  }
  useEffect(() => {
    fetchEvent()
  }, []);

  const formattedDate = `${new Date(event.eventDate).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })} - ${new Date(event.eventDate).toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit'
  })}`;

  if (event.length <= 0) return <MainLoadingScreen />;
  return (
    <div className='pagePattern'>
      <Helmet><title>La Concordia - Évènements</title></Helmet>
      <div id='category'>
        <h2>{event.title}</h2>
        <h3>{formattedDate}</h3>
      </div>
      <div className='pagePattern__content'>
        <p>{event.content}</p>
      </div>
    </div>
  )
}
