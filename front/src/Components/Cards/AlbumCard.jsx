import React from 'react';
import { Link } from 'react-router-dom';

// Composant AlbumCard qui est utilisé sur les pages Visitors/Albums et Users/AlbumsList.

export default function AlbumCard(props) {

    // Intégration des données name, thumbnail et id en tant que props
    const { name, thumbnail, id } = props.albumCard;

    // Création de la variable "isUsersPage" qui vérifie si l'url actuel débute par "espace-membre". Le but étant que si l'url ne débute pas par "espace-membre", un lien redirige le visiteur pour consulter les médias de l'album.
    const isUsersPage = window.location.pathname.startsWith('/espace-membre');

    // Si l'url débute bien par "espace-membre", on affiche uniquement la div "albumCard", dans laquelle se trouve la photo de couverture, ainsi que le titre de l'album
    if (isUsersPage) {
        return (
            <div className='albumCard'>
                <img src={thumbnail} alt="photo" className='albumCard__img' />
                <h3 className='albumCard__title'>{name}</h3>
            </div>
        )
    }

    // Si l'url ne débute pas par "espace-membre" les éléments présents dans la div "albumCard" sont englobés d'un lien qui mène vers l'album concerné
    else {
        return (
            <div className='albumCard'>
                <Link to={`/albums/${id}`} className='link'>
                    <img src={thumbnail} alt="photo" className='albumCard__img' />
                    <h3 className='albumCard__title'>{name}</h3>
                </Link>
            </div>
        )
    }
}