import React from 'react';
import { Link } from 'react-router-dom';


export default function AlbumCard(props) {

    const { name, thumbnail, id } = props.albumCard;

    const isUsersPage = window.location.pathname.startsWith('/espace-membre');

    // Si l'url débute par 'espace-membre', on affiche uniquement la div albumCard, dans laquelle se trouve la première photo de l'album,  ainsi que le titre de l'album
    if (isUsersPage) {
        return (
            <div className='albumCard'>
                <img src={thumbnail} alt="photo" className='albumCard__img' />
                <h3 className='albumCard__title'>{name}</h3>
            </div>
        )
    }

    // Si l'url ne débute pas par 'espace-membre' les éléments présents dans la div albumCard sont englobés d'un lien qui mène vers l'album concerné
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