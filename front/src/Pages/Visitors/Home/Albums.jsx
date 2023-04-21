import React, { useState } from 'react'
import AlbumCard from '../../../Components/Cards/AlbumCard';
import AlbumsDatas from '../../../data/Albums';
import Sweetpagination from 'sweetpagination';
import { Helmet } from 'react-helmet';


export default function Medias() {

    const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

    const [cards, setCards] = useState(AlbumsDatas);
    return (
        <div>
            <Helmet><title>La Concordia - Galerie médias</title></Helmet>

            <div id='category'>
                <h2>Galerie médias</h2>
            </div>

            <div className="cardsContainer">
                {currentPageData && currentPageData[0]?.name && currentPageData.length > 0 ? currentPageData.map((item, k) => {
                    return <AlbumCard albumCard={item} key={k} />
                }) : null}
            </div>

            {/* Intégration du module SweetPagination */}
            <div className='pagination'>
                <Sweetpagination
                    currentPageData={setCurrentPageData}
                    dataPerPage={6}
                    getData={cards}
                    navigation={true}
                    getStyle={'pagination-style'}
                />
            </div >
        </div>
    )
}