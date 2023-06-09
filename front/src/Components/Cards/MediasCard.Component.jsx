import React, { useEffect, useState } from 'react';
import ModalPhoto from '../Modal/ModalPhoto.Component';
import { useApi } from '../../Router';

// Composant MediasCard qui est utilisé sur la page AlbumDetails.

export default function MediasCard(props) {

    // Intégration des données "title" et "picture" en tant que props
    const { id, file } = props.mediasCard;
    const { album, selectedCard, setSelectedCard } = props

    // Utilisation du Hook useState pour définir l'état de "click". "click" est initialisé avec le booléen "false". Cette variable est utilisée par la div "mediasActionsContainer". Et son état est modifié par le biais de la fonction "handleClick", elle même utilisée lors du clic sur cette div et sur l'image.
    const [click, setClick] = useState(false);

    // Utilisation du Hook useState pour définir l'état de "showModal". "showModal" est initialisé avec le booléen false. Son état est modifié lors du clic sur le bouton "visualiser" afin d'afficher la modale. "showModal" et "setShowModal" sont envoyés en tant que props au composant "ModalPhoto".
    const [showModal, setShowModal] = useState(false);

    // Définition de la fonction "handleClick" qui inverse l'état de "click". 
    const handleClick = () => {
        if (parseInt(selectedCard) !== parseInt(id)) {
            setSelectedCard(id);
        } else {
            setSelectedCard(null);
        }
        setClick(!click);
    };



    return (
        <div key={id} className='mediasCard'>
            {/* Intégration des props "picture" et "title" en tant que valeur des attributs "src" et "alt". Utilisation de l'attribut "onClick" avec la fonction "handleClick" afin de rendre active la div "mediasActionsContainer". */}
            <img src={`${useApi.baseUrl}/images/${file}`} alt={file.split('/')[file.split('/').length - 1]} className='mediasCard__photo' onClick={handleClick} />

            {/* La classe de la div dépend de la valeur de la varibale "click", si vrai la valeur "active" est ajouté au nom de la classe. */}
            <div className={selectedCard === id ? "mediasActionsContainer active" : "mediasActionsContainer"} onClick={handleClick}>
                {/* Lors du clic sur le bouton, la valeur de "showModal" devient vrai afin d'afficher la modale */}
                <button onClick={() => setShowModal(true)} className='mediasActionsContainer__button firstButton' >Visualiser</button>
                {/* <a href='' download='image.jpg'> */}
                <a target='_blank' download={file.split('/')[file.split('/').length - 1]} href={file} className='mediasActionsContainer__button secondButton' >Télécharger</a>
                {/* </a> */}
            </div>

            {/* Intégration du composant ModalPhoto. Les variables "showModal" et "setShowModal" sont envoyés en tant que props au composant */}
            <ModalPhoto showModal={showModal} setShowModal={setShowModal}>
                <div className='modal photoModal'>
                    {/* Lors du clic sur le bouton, la valeur de "showModal" devient fausse afin de fermer la modale */}
                    <button className='closeButton' onClick={() => setShowModal(false)}><i className="fa-solid fa-square-xmark"></i></button>
                    <img src={`${useApi.baseUrl}/images/${file}`} alt={file.split('/')[file.split('/').length - 1]} className='modal__medias' />
                    <p className='modal__mediasTitle'>{album}</p>
                </div>
            </ModalPhoto>
        </div>
    )
}