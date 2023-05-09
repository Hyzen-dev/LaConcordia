import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Sweetpagination from 'sweetpagination';
import EventCard from '../../../Components/Cards/EventCard.Component';
import EventsDatas from './../../../data/Events';

// Page Events, qui retourne la liste des évènements consultables par les visiteurs.

export default function Events() {

  // Utilisation du Hook useState pour définir les données de la page actuelle et leur état. "currentPageData" est initialisé avec un tableau de deux cases vides grâce à la méthode "fill()" d'un nouvel objet Array. Cette variable est utilisée par "SweetPagination" pour afficher les évènements de la page courante.
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

  // Utilisation du Hook useState pour définir les Cartes. "cards" est initialisé avec les données provenants de "EventsDatas". Cette variable est utilisée par "SweetPagination" pour récupérer les données.
  const [cards, setCards] = useState(EventsDatas);

  return (
    <div>
      {/* Utilisation de la bibliothèque Helmet pour modifier la balise html "head" */}
      <Helmet><title>La Concordia - Évènements</title></Helmet>
      <div id='category'>
        <h2>Évènements à venir</h2>
      </div>

      <div className='cardPagePattern'>


        <div className="cardsContainer">
          {/* Utilisation d'une expression JSX qui vérifie si "currentPageData" existe et contient au moins un élément avec une propriété "name". Si c'est le cas, la méthode map() est utilisée pour créer une nouvelle liste de Composants "EventCard". Si "currentPageData" est vide ou n'a pas de propriété "thumbnail", rien n'est renvoyé. */}
          {currentPageData && currentPageData[0]?.thumbnail && currentPageData.length > 0 ? currentPageData.map((item, k) => (
            <EventCard eventCard={item} key={k} />
          )) : null}
        </div>

        <div className='pagination'>

          {/* Intégration du module "SweetPagination", qui permet l'affichage de 6 cartes évènement par page */}
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
