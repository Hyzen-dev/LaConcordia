import React from 'react';
import { Link } from 'react-router-dom';
import MediasDatas from './../../../data/Medias';

export default function Medias() {

  return (
    <div>
      <h2>Galerie médias</h2>
      { MediasDatas.map ((album, index) => {
        return <Link to={`/medias/${album.id}`} key={index}>
          <h3>{album.title}</h3>
          <p>{album.image1}</p>
        </Link>
      })}
    </div>
  )
}