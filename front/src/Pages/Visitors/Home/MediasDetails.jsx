import React from 'react';
import { useParams } from 'react-router-dom';

export default function MediasDetails(props) {

  const {id} = useParams();
  const {medias} = props;

  const album = medias.find((album) => album.id === parseInt(id));

  return (
    <div>
      <h1>{album.title}</h1>
      <p>{album.image1}</p>
      <p>{album.image2}</p>
      <p>{album.image3}</p>
    </div>
  )
}