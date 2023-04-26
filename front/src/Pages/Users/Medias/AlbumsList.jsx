import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Sweetpagination from 'sweetpagination';
import AlbumCard from '../../../Components/Cards/AlbumCard.Component';
import AlbumsDatas from '../../../data/Albums';

// Page AlbumsList qui renvoi la liste des albums déjà créés.

export default function AlbumsList() {

  // Utilisation du Hook useState pour définir les données de la page actuelle et leur états. "currentPageData" est initialisé avec un tableau de deux cases vides grâce à la méthode "fill()" d'un nouvel objet Array. Cette variable est utilisée par "SweetPagination" pour afficher les albums de la page courante.
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

  // Utilisation du Hook useState pour définir les Cartes. "cards" est initialisé avec les données provenants de "AlbumsDatas". Cette variable est utilisée par "SweetPagination" pour récupérer les données.
  const [cards, setCards] = useState(AlbumsDatas)

  return (
    <div className='usersPage'>
      {/* Utilisation de la bibliothèque Helmet pour modifier la balise html 'head' */}
      <Helmet><title>La Concordia - Galerie médias</title></Helmet>

      <div id='category'>
        <h2>Médias</h2>
        <h3>Modifiez ou supprimez un album</h3>
      </div>

      <Link to='/espace-membre/medias/creation' className='link'><button className='button add'>Ajouter un nouvel album</button></Link>

      <div className="medias-cards-container usersCardsContainer">

        {/* Utilisation d'une expression JSX qui vérifie si "currentPageData" existe et contient au moins un élément avec une propriété "title". Si c'est le cas, la méthode map() est utilisée pour créer une nouvelle liste de Composant "AlbumCard". Si "currentPageData" est vide ou n'a pas de propriété "title", rien n'est renvoyé. */}
        {currentPageData && currentPageData[0]?.thumbnail && currentPageData.length > 0 ? currentPageData.map((item, k) => (
          <AlbumCard albumCard={item} key={k} />
        )) : null}
      </div>

      {/* Intégration du module "SweetPagination", qui permet l'affichage de 6 cartes albums par page */}
      <Sweetpagination
        currentPageData={setCurrentPageData}
        dataPerPage={6}
        getData={cards}
        navigation={true}
        getStyle={'pagination-style'}
      />
    </div >
  )
}