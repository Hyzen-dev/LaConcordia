import React, { useState } from 'react'
import MediasCard from '../../../Components/Visitors/MediasCard';
import MediasDatas from './../../../data/Medias';
import Sweetpagination from 'sweetpagination';
import { Helmet } from 'react-helmet';


export default function Medias() {

  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

  const [cards, setCards] = useState(MediasDatas);

  return (
    <div>
      <Helmet><title>La Concordia - Galerie médias</title></Helmet>
      <div id='category'>
        <h2>Galerie médias</h2>
      </div>

      <div className="medias-cards-container">
        {currentPageData && currentPageData[0]?.title && currentPageData.length > 0 ? currentPageData.map((item, k) => (
          <MediasCard mediasCard={item} key={k} />
        )) : null}
      </div>

      <Sweetpagination
        currentPageData={setCurrentPageData}
        dataPerPage={6}
        getData={cards}
        navigation={true}
        getStyle={'pagination-style'}
      />
    </div >
  )
}