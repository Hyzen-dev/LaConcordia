import React from 'react';
import { Link } from 'react-router-dom';

export default function MediasCard(props) {

    const { photos, title, id } = props.mediasCard;

    return (
        <div className='mediasCard'>
            <Link to={`/medias/${id}`} className='link'>
                <img src={photos[0]} alt="photo" className='mediasCard__img' />
                <h3 className='mediasCard__title'>{title}</h3>
            </Link>
        </div>
    )
}
