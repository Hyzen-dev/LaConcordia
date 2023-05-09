import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Sweetpagination from 'sweetpagination';
import NewsCard from '../../../Components/Cards/NewsCard.Component';
import NewsDatas from './../../../data/News';

// Page News, qui retourne la liste des actualités consultables par les visiteurs.

export default function News() {

  // Utilisation du Hook useState pour définir les données de la page actuelle et leur état. "currentPageData" est initialisé avec un tableau de deux cases vides grâce à la méthode "fill()" d'un nouvel objet Array. Cette variable est utilisée par "SweetPagination" pour afficher les actualités de la page courante.
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

  // Utilisation du Hook useState pour définir les Cartes. "cards" est initialisé avec les données provenants de "NewsDatas". Cette variable est utilisée par "SweetPagination" pour récupérer les données.
  const [cards, setCards] = useState(NewsDatas);

  return (
    <div>
      {/* Utilisation de la bibliothèque Helmet pour modifier la balise html "head" */}
      <Helmet><title>La Concordia - Actualités</title></Helmet>
      <div id='category'>
        <h2>
          Actualités
        </h2>
      </div>

      <div className='cardPagePattern'>

        <div className="cardsContainer">
          {/* Utilisation d'une expression JSX qui vérifie si "currentPageData" existe et contient au moins un élément avec une propriété "thumbnail". Si c'est le cas, la méthode map() est utilisée pour créer une nouvelle liste de Composants "NewsCard". Si "currentPageData" est vide ou n'a pas de propriété "thumbnail", rien n'est renvoyé. */}
          {currentPageData && currentPageData[0]?.thumbnail && currentPageData.length > 0 ? currentPageData.map((item, k) => (
            <NewsCard newsCard={item} key={k} />
          )) : null}
        </div>

        <div className='pagination'>
          {/* Intégration du module "SweetPagination", qui permet l'affichage de 6 cartes actualités par page */}
          <Sweetpagination
            currentPageData={setCurrentPageData}
            dataPerPage={6}
            getData={cards}
            navigation={true}
            getStyle={'pagination-style'}
          />
        </div>
      </div>
    </div>
  )
}
