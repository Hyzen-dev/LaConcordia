// Géré par le rôle : Rédacteur, admin


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewsCard from '../../../Components/Cards/NewsCard';
import NewsDatas from './../../../data/News';
import Sweetpagination from 'sweetpagination';
import { Helmet } from 'react-helmet';

export default function NewsList() {

  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

  const [cards, setCards] = useState(NewsDatas);

  return (
    <div className='usersPage'>
      <Helmet><title>La Concordia - Actualités</title></Helmet>
      <div id='category'>
        <h2>Actualités</h2>
        <h3>Modifiez ou supprimez une actualité</h3>
      </div>

      <Link to='/espace-membre/actualites/creation' className='link'><button className='button add'>Ajouter une nouvelle actualité</button></Link>

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