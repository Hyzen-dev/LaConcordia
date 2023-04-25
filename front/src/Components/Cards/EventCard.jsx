import React from 'react';
import { Link } from 'react-router-dom';

// Composant EventCard qui est utilisé sur les pages Visitors/Events et Users/EventsList.

export default function EventCard(props) {

    // Intégration des données "thumbnail", "title", "content", "createdAt" et "id" en tant que props.
    const { thumbnail, title, content, createdAt, id } = props.eventCard;

    // Création de la variable "isUsersPage" qui vérifie si l'url actuel débute par "espace-membre". Le but étant que si l'url ne débute pas par "espace-membre", un lien redirige le visiteur pour consulter l'article complet.
    const isUsersPage = window.location.pathname.startsWith('/espace-membre');

    // Si l'url débute bien par "espace-membre", on affiche uniquement la div "cards", dans laquelle se trouve la photo de couverture, les premiers caractères de l'article, la date de création et le lien vers la localisation de l'évènement
    if (isUsersPage) {
        return (
            <div className='cards usersCards'>
                <img src={thumbnail} alt="photo" className='cards__img' />
                <div className='cards__content'>
                    <h3 className='cards__content__title'>{title}</h3>
                    
                    {/* Le taille du contenu de l'article est divisée afin de ne laisser apparaitre que les premiers caractères de l'article */}
                    <p className='cards__content__content'>{content.substring(0, (content.length / 60))} [...]</p>
                    <div className='cards__content__footer'>
                        <p className='cards__content__footer__date'>{createdAt}</p>
                        <p className='cards__content__footer__info'>GPS</p>
                    </div>
                </div>
            </div>
        )
    }

    // Si l'url ne débute pas par "espace-membre" les éléments présents dans la div "cards" sont englobés d'un lien qui mène vers l'article concerné.
    else {
        return (
            <div className='cards'>
                <Link to={`/evenements/${id}`} className='link'>
                    <img src={thumbnail} alt="photo" className='cards__img' />
                    <div className='cards__content'>
                        <h3 className='cards__content__title'>{title}</h3>
                        <p className='cards__content__content'>{content.substring(0, (content.length / 60))} [...]</p>
                        <div className='cards__content__footer'>
                            <p className='cards__content__footer__date'>{createdAt}</p>
                            <p className='cards__content__footer__info'>GPS</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}