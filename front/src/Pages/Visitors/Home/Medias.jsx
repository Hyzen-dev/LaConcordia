import React from 'react';
import { Link } from 'react-router-dom';
import MediasDatas from './../../../data/Medias';

export default function Medias() {

  const datas = MediasDatas;

  return (
    <div>
      { datas.map ((album, index) => {
        return <Link to={`/medias/${album.id}`} key={index}>
          <h4>{album.title}</h4>
          <p>{album.image1}</p>
        </Link>
      })}
    </div>
  )
}