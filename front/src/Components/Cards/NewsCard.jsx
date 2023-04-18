import React from 'react';
import { Link } from 'react-router-dom';

export default function NewsCard(props) {

    const { thumbnail, title, content, createdAt, id } = props.newsCard;

    const isUsersPage = window.location.pathname.startsWith('/espace-membre');

    if (isUsersPage) {
        return (
            <div className='cards'>
                <img src={thumbnail} alt="photo" className='cards__img' />
                <div className='cards__content'>
                    <h3 className='cards__title'>{title}</h3>
                    <p className='cards__content__content'>{content.substring(0, (content.length / 60))} [...]</p>
                    <div className='cards__content__footer newsFooter'>
                        <p className='cards__content__footer__date'>{createdAt}</p>
                    </div>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className='cards'>
                <Link to={`/actualites/${id}`} className='link'>
                    <img src={thumbnail} alt="photo" className='cards__img' />
                    <div className='cards__content'>
                        <h3 className='cards__title'>{title}</h3>
                        <p className='cards__content__content'>{content.substring(0, (content.length / 60))} [...]</p>
                        <div className='cards__content__footer newsFooter'>
                            <p className='cards__content__footer__date'>{createdAt}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}