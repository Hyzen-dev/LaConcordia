import React from 'react';
import NewsDatas from './../../../data/News';
import { useParams } from 'react-router-dom';

// Page NewsDetails qui retourne le détail de l'actualité sur laquelle le visiteur a cliqué.

export default function NewsDetails() {

  // Utilisation du Hook useParams pour récupérer l'id de l'actualité.
  const { id } = useParams();

  // Création de la variable "news" qui recherche dans les données "NewsDatas", l'actualité ayant un id correspondant à l'id présent dans l'url.
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
