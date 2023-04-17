import React from 'react';
import { Link } from 'react-router-dom';

export default function EventCard(props) {

    const { thumbnail, title, content, createdAt, id } = props.eventCard;

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