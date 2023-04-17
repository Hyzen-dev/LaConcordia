import React from 'react';
import NewsDatas from './../../../data/News';
import { useParams } from 'react-router-dom';

export default function NewsDetails() {

  const { id } = useParams();

  const news = NewsDatas.find((news) => news.id === parseInt(id));

  return (
    <div>
      <div id='category'>
        <h2>{news.title}</h2>
        <h3>{news.createdAt}</h3>
      </div>
      <div className='pagePattern'>
        <p>{news.content}</p>
      </div>
    </div>
  )
}
