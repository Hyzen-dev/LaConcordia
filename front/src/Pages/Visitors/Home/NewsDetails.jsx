import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useApi } from '../../../Router';
import parse from 'html-react-parser';
import MainLoadingScreen from '../../../Components/LoadingScreen/MainLoadingScreen.Component';

// Page NewsDetails qui retourne le détail de l'actualité sur laquelle le visiteur a cliqué.

export default function NewsDetails() {

  const [news, setNews] = useState({})
  const { id } = useParams();

  const fetchNews = async () => {
    const response = await useApi.news.GetById({ id: parseInt(id) });
    return setNews(response.data.data);
  }

  useEffect(() => {
    fetchNews()
  }, []);

  const formattedDate = `${new Date(news.createdAt).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })} - ${new Date(news.createdAt).toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit'
  })}`;

  return (
    <div className='pagePattern'>
      <Helmet><title>La Concordia - Actualités</title></Helmet>

      <div id='category'>
        <h2>{news.title}</h2>
        <h3>{formattedDate}</h3>
      </div>
      <div className='pagePattern__content'>
        {news.length <= 0 || !news.content ? <MainLoadingScreen /> :
          <>
            {parse(news.content, {})}
          </>
        }
      </div>
    </div>
  )
}
