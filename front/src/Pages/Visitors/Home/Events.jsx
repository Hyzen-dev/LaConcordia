import React, { useState } from 'react'
import EventCard from '../../../Components/Cards/EventCard';
import EventsDatas from './../../../data/Events';
import Sweetpagination from 'sweetpagination';
import { Helmet } from 'react-helmet';


export default function Events() {

  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

  const [cards, setCards] = useState(EventsDatas);

  return (
    <div>
      <Helmet><title>La Concordia - Evènements</title></Helmet>
      <div id='category'>
        <h2>Évènements à venir</h2>
      </div>

      <div className="cardsContainer">
        {currentPageData && currentPageData[0]?.thumbnail && currentPageData.length > 0 ? currentPageData.map((item, k) => (
          <EventCard eventCard={item} key={k} />
        )) : null}
      </div>

      <div className='pagination'>
        <Sweetpagination
          currentPageData={setCurrentPageData}
          dataPerPage={6}
          getData={cards}
          navigation={true}
          getStyle={'pagination-style'}
        />
      </div>
    </div>
  )
}
