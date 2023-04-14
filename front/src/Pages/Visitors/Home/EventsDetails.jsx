import React from 'react';
import EventsDatas from './../../../data/Events';
import { useParams } from 'react-router-dom';

export default function EventsDetails() {

  const { id } = useParams();

  const event = EventsDatas.find((event) => event.id === parseInt(id));

  return (
    <div>
      <div id='category'>
        <h2>{event.title}</h2>
        <h3>{event.eventDate}</h3>
      </div>
      <div className='articleContent'>
        <p>{event.content}</p>
      </div>
    </div>
  )
}
