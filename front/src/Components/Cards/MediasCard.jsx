import React from 'react';
import { useParams } from 'react-router-dom';

export default function MediasCard(props) {

    const { title, picture, albumId } = props.mediasCard;

    const { id } = useParams();

    return (
        <img src={picture} alt={title} className='album__photo' />
    )
}