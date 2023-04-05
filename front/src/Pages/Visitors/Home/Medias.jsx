import React from 'react';
import { Link } from 'react-router-dom';

export default function Medias(props) {

  const {medias} = props;

  return (
    <div>
      { medias.map ((album, index) => {
        return <Link to={`/medias/${album.id}`} key={index}>
          <h1>{album.title}</h1>
          <p>{album.image1}</p>
        </Link>
      })}
    </div>
  )
}