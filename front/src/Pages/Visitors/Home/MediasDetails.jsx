import React from 'react';
import MediasDatas from './../../../data/Medias';
import { useParams } from 'react-router-dom';

export default function MediasDetails() {

  const {id} = useParams();
  const datas = MediasDatas;

  const album = datas.find((album) => album.id === parseInt(id));

  return (
    <div>
      <h4>{album.title}</h4>
      <p>{album.image1}</p>
      <p>{album.image2}</p>
      <p>{album.image3}</p>
    </div>
  )
}