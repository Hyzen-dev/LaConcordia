// Géré par le rôle : Chef, sous-chef, rédacteur, admin

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../../../Components/Cards/EventCard';
import EventsDatas from './../../../data/Events';
import Sweetpagination from 'sweetpagination';
import { Helmet } from 'react-helmet';

export default function EventsList() {

  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

  const [cards, setCards] = useState(EventsDatas);

  return (
    <div>
      <Helmet><title>La Concordia - Evènements</title></Helmet>
      <div id='category'>
        <h2>Évènements</h2>
        <h3>Modifiez ou supprimez un évènement</h3>
      </div>

      <Link to='/espace-membre/actualites/creation' className='link'><button className='button add'>Ajouter un nouvel évènement</button></Link>

      <div className="events-cards-container">
        {currentPageData && currentPageData[0]?.thumbnail && currentPageData.length > 0 ? currentPageData.map((item, k) => (
          <EventCard eventCard={item} key={k} />
        )) : null}
      </div>

      <Sweetpagination
        currentPageData={setCurrentPageData}
        dataPerPage={6}
        getData={cards}
        navigation={true}
        getStyle={'pagination-style'}
      />
    </div>
  )
}
