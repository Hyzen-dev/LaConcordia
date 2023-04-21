import React, { useState, useEffect } from 'react'
import AlbumsDatas from '../../../data/Albums';
import PhotosDatas from '../../../data/Photos';
import { useParams } from 'react-router-dom';
import Sweetpagination from 'sweetpagination';
import MediasCard from '../../../Components/Cards/MediasCard';

export default function MediasDetails() {

    const { id } = useParams();

    const album = AlbumsDatas.find((album) => album.id === parseInt(id));





    // const photos = PhotosDatas.find((photo) => photo.albumId === album.id)


    const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const photos = PhotosDatas.filter((photo) => photo.albumId === parseInt(id))
        setCards(photos)
    }, [])

    return (
        <div>
            <div id='category'>
                <h2>Galerie Médias</h2>
                <h3>{album.name}</h3>
            </div>


            <div className='album'>

                {currentPageData && currentPageData[0]?.title && currentPageData.length > 0 ? currentPageData.map((item, k) => (
                    console.log(item),
                    <MediasCard mediasCard={item} key={k} />
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
            </div >




        </div>
    )
}