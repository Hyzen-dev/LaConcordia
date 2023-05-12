import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Sweetpagination from 'sweetpagination';
import NewsCard from '../../../Components/Cards/NewsCard.Component';
import { useApi } from '../../../Router';



// Page NewsList qui renvoi la liste des actualités déjà créées.

export default function NewsList() {

  // Utilisation du Hook useState pour définir les données de la page actuelle et leur états. "currentPageData" est initialisé avec un tableau de deux cases vides grâce à la méthode "fill()" d'un nouvel objet Array. Cette variable est utilisée par "SweetPagination" pour afficher les actualités de la page courante.
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

  const [allNews, setAllNews] = useState([])

  const fetchAllNews = async () => {
    const response = await useApi.news.GetAll();
    const news = response.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    return setAllNews(news);
  }

  useEffect(() => {
    fetchAllNews()
  }, []);


  return (
    <div className='usersPage'>
      {/* Utilisation de la bibliothèque Helmet pour modifier la balise html 'head' */}
      <Helmet><title>La Concordia - Actualités</title></Helmet>

      <div id='category'>
        <h2>Actualités</h2>
        <h3>Modifiez ou supprimez une actualité</h3>
      </div>

      <div className='usersPage__content'>
        <Link to='/espace-membre/actualites/creation' className='link'><button className='add'>Ajouter une nouvelle actualité</button></Link>

        <div className="news-cards-container usersCardsContainer">
          {/* Utilisation d'une expression JSX qui vérifie si "currentPageData" existe et contient au moins un élément avec une propriété "thumbnail". Si c'est le cas, la méthode map() est utilisée pour créer une nouvelle liste de Composant "NewsCard". Si "currentPageData" est vide ou n'a pas de propriété "thumbnail", rien n'est renvoyé. */}
          {currentPageData && currentPageData[0]?.thumbnail && currentPageData.length > 0 ? currentPageData.map((item, k) => (
            <NewsCard apiUrl={useApi.baseUrl} newsCard={item} key={k} />
          )) : null}
        </div>

        {/* Intégration du module "SweetPagination", qui permet l'affichage de 6 cartes actualités par page */}
        <Sweetpagination
          currentPageData={setCurrentPageData}
          dataPerPage={6}
          getData={allNews}
          navigation={true}
          getStyle={'pagination-style'}
        />
      </div>
    </div>
  )
}