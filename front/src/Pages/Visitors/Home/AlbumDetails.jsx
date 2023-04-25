import React, { useState, useEffect } from 'react'
import AlbumsDatas from '../../../data/Albums';
import PhotosDatas from '../../../data/Photos';
import { useParams } from 'react-router-dom';
import Sweetpagination from 'sweetpagination';
import MediasCard from '../../../Components/Cards/MediasCard';

// Page AlbumDetail, qui renvoi l'ensemble des médias de l'album sur lequel l'utilisateur à cliqué.

export default function AlbumDetails() {

    // Utilisation du Hook useParams afin de récupérer l'id de l'album concerné via les paramètres de l'url actuel.
    const { id } = useParams();

    // Création de la variable album correspondant à l'album actuel.
    const album = AlbumsDatas.find((album) => album.id === parseInt(id));

    // Utilisation du Hook useState pour définir les données de la page actuelle et leur états. "currentPageData" est initialisé avec un tableau de deux cases vides grâce à la méthode "fill()" d'un nouvel objet Array. Cette variable est utilisée par "SweetPagination" pour afficher les médias de la page courante.
    const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

    // Utilisation du Hook useState pour définir les Cartes. "cards" est initialisé comme étant un tableau vide. Cette variable est utilisée par "SweetPagination" pour récupérer les données. L'état de cette varible est actualisée grace au Hook useEffect.
    const [cards, setCards] = useState([]);

    // Utilisation du Hook useEffect qui défini la variable photos en filtrant les données PhotosDatas grace à l'id de l'album concerné. setCards est utilisé pour définir photos comme étant le nouvel état de la variable Cards. 
    useEffect(() => {
        const photos = PhotosDatas.filter((photo) => photo.albumId === parseInt(id))
        setCards(photos)
    }, [])

    return (
        <div>
            <div id='category'>
                <h2>Galerie Médias</h2>
                <h3>{album.name}</h3>
            </div>

            <div>
                <div className='mediasContainer'>

                    {/* Utilisation d'une expression JSX qui vérifie si currentPageData existe et contient au moins un élément avec une propriété name. Si c'est le cas, la méthode map() est utilisée pour créer une nouvelle liste de Composants MediasCard. Si currentPageData est vide ou n'a pas de propriété name, rien n'est renvoyé. */}
                    {currentPageData && currentPageData[0]?.title && currentPageData.length > 0 ? currentPageData.map((item, k) => (
                        console.log(item),
                        <MediasCard mediasCard={item} key={k} />
                    )) : null}
                </div>

                <div className='pagination'>
                    
                    {/* Intégration du module SweetPagination, qui permet l'affichage de 6 cartes médias par page */}
                    <Sweetpagination
                        currentPageData={setCurrentPageData}
                        dataPerPage={6}
                        getData={cards}
                        navigation={true}
                        getStyle={'pagination-style'}
                    />
                </div >
            </div>
        </div>
    )
}