// Géré par le rôle : photographe, admin

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AlbumCard from '../../../Components/Cards/AlbumCard';
// import MediasDatas from './../../../data/Medias';
import Sweetpagination from 'sweetpagination';
import { Helmet } from 'react-helmet';


export default function MediasList() {

  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

  const [cards, setCards] = useState({})//useState(MediasDatas);

  return (
    <div className='usersPage'>
      <Helmet><title>La Concordia - Galerie médias</title></Helmet>
      <div id='category'>
        <h2>Médias</h2>
        <h3>Modifiez ou supprimez un album</h3>
      </div>

      <Link to='/espace-membre/medias/creation' className='link'><button className='button add'>Ajouter un nouvel album</button></Link>

      <div className="medias-cards-container">
        {currentPageData && currentPageData[0]?.title && currentPageData.length > 0 ? currentPageData.map((item, k) => (
          <albumCard albumCard={item} key={k} />
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