import React, { useState }  from 'react'
import NewsCard from '../../../Components/Visitors/NewsCard';
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

      <div className="news-cards-container">
        {currentPageData && currentPageData[0]?.thumbnail && currentPageData.length > 0 ? currentPageData.map((item, k) => (
          <NewsCard newsCard={item} key={k} />
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
