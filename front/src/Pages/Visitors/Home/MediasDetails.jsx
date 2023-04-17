import React from 'react';
import MediasDatas from './../../../data/Medias';
import { useParams } from 'react-router-dom';

export default function MediasDetails() {

  const { id } = useParams();

  const album = MediasDatas.find((album) => album.id === parseInt(id));

  return (
    <div>
      <div id='category'>
        <h2>Galerie Médias</h2>
        <h3>{album.title}</h3>
      </div>
      <div className='album'>
        {album.photos.map((photo) => {
          return <img src={photo} className='album__photo' />
        })}
      </div>
    </div>
  )
}