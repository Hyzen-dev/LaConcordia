import React, { useState } from 'react'
import NewsCard from '../../../Components/Cards/NewsCard';
import NewsDatas from './../../../data/News';
import Sweetpagination from 'sweetpagination';
import { Helmet } from 'react-helmet';

export default function News() {

  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

  const [cards, setCards] = useState(NewsDatas);

  return (
    <div>
      <Helmet><title>La Concordia - Actualités</title></Helmet>
      <div id='category'>
        <h2>
          Actualités
        </h2>
      </div>

      <div className="cardsContainer">
        {currentPageData && currentPageData[0]?.thumbnail && currentPageData.length > 0 ? currentPageData.map((item, k) => (
          <NewsCard newsCard={item} key={k} />
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
