import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../../../Components/Cards/EventCard';
import EventsDatas from './../../../data/Events';
import Sweetpagination from 'sweetpagination';
import { Helmet } from 'react-helmet';

// Page EventList qui renvoi la liste des évènements déjà créés.

export default function EventsList() {

  // Utilisation du Hook useState pour définir les données de la page actuelle et leur états. "currentPageData" est initialisé avec un tableau de deux cases vides grâce à la méthode "fill()" d'un nouvel objet Array. Cette variable est utilisée par "SweetPagination" pour afficher les évènements de la page courante.
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

  // Utilisation du Hook useState pour définir les Cartes. "cards" est initialisé avec les données provenants de "EventsDatas". Cette variable est utilisée par "SweetPagination" pour récupérer les données.
  const [cards, setCards] = useState(EventsDatas);

  return (
    <div className='usersPage'>
      {/* Utilisation de la bibliothèque Helmet pour modifier la balise html 'head' */}
      <Helmet><title>La Concordia - Evènements</title></Helmet>

      <div id='category'>
        <h2>Évènements</h2>
        <h3>Modifiez ou supprimez un évènement</h3>
      </div>

      <Link to='/espace-membre/evenements/creation' className='link'><button className='button add'>Ajouter un nouvel évènement</button></Link>

      <div className="events-cards-container">

        {/* Utilisation d'une expression JSX qui vérifie si "currentPageData" existe et contient au moins un élément avec une propriété "thumbnail". Si c'est le cas, la méthode map() est utilisée pour créer une nouvelle liste de Composant "EventCard". Si "currentPageData" est vide ou n'a pas de propriété "thumbnail", rien n'est renvoyé. */}
        {currentPageData && currentPageData[0]?.thumbnail && currentPageData.length > 0 ? currentPageData.map((item, k) => (
          <EventCard eventCard={item} key={k} />
        )) : null}
      </div>

      {/* Intégration du module "SweetPagination", qui permet l'affichage de 6 cartes évènement par page */}
      <Sweetpagination
        currentPageData={setCurrentPageData}
        dataPerPage={6}
        getData={cards}
        navigation={true}
        getStyle={'pagination-style'}
      />
    </div>
  )
}