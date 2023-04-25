import React, { useState } from 'react'
import AlbumCard from '../../../Components/Cards/AlbumCard';
import AlbumsDatas from '../../../data/Albums';
import Sweetpagination from 'sweetpagination';
import { Helmet } from 'react-helmet';

// Page Medias, qui retourne la liste des albums consultables par les visiteurs.

export default function Medias() {

    // Utilisation du Hook useState pour définir les données de la page actuelle et leur états. "currentPageData" est initialisé avec un tableau de deux cases vides grâce à la méthode "fill()" d'un nouvel objet Array. Cette variable est utilisée par "SweetPagination" pour afficher les albums de la page courante.
    const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

    // Utilisation du Hook useState pour définir les Cartes. "cards" est initialisé avec les données provenants de AlbumsDatas. Cette variable est utilisée par "SweetPagination" pour récupérer les données.
    const [cards, setCards] = useState(AlbumsDatas);

    return (
        <div>
            {/* Utilisation de la bibliothèque Helmet pour modifier la balise html 'head' */}
            <Helmet><title>La Concordia - Galerie médias</title></Helmet>

            <div id='category'>
                <h2>Galerie médias</h2>
            </div>

            <div className="cardsContainer">

                {/* Utilisation d'une expression JSX qui vérifie si "currentPageData" existe et contient au moins un élément avec une propriété "name". Si c'est le cas, la méthode map() est utilisée pour créer une nouvelle liste de Composant AlbumCard. Si "currentPageData" est vide ou n'a pas de propriété "name", rien n'est renvoyé. */}
                {currentPageData && currentPageData[0]?.name && currentPageData.length > 0 ? currentPageData.map((item, k) => {
                    return <AlbumCard albumCard={item} key={k} />
                }) : null}
            </div>

            <div className='pagination'>

                {/* Intégration du module "SweetPagination", qui permet l'affichage de 6 cartes albums par page */}
                <Sweetpagination
                    currentPageData={setCurrentPageData}
                    dataPerPage={6}
                    getData={cards}
                    navigation={true}
                    getStyle={'pagination-style'}
                />
            </div >
        </div>
    )
}