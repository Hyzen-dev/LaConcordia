import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


export default function CreateForm() {

    const location = useLocation();

    const [medias, setMedias] = useState(null);

    let title;
    let save;
    let createFormContent;


    const handleMediasChange = (event) => {
        setMedias(URL.createObjectURL(event.target.files[0]));
    }


    if (location.pathname.startsWith('/espace-membre/evenement')) {
        title = "Titre de l'évènement";
        save = "Enregistrer l'évènement";

        createFormContent = (
            <div className='form createForm'>
                <label htmlFor="title" className='pagePattern__subheading'>{title}</label>
                <input type="text" name='title' placeholder='Ajouter le titre' />
                <textarea name="" id="" cols="30" rows="10" placeholder='Ajouter du contenu'></textarea>
                <label htmlFor="download" className='button'>Ajouter une photo pour illustrer votre évènement</label>
                <input type="file" name="download" id='download' className='downloadInput' onChange={handleMediasChange} />
                {medias && <img src={medias} alt="Uploaded file" width={'60%'} />}
                <button className='button'>{save}</button>
            </div>
        )


    } else if (location.pathname.startsWith('/espace-membre/actualite')) {
        title = "Titre de l'actualité";
        save = "Engistrer l'actualité";

        return (
            createFormContent = (
                <div className='form createForm'>
                    <label htmlFor="title" className='pagePattern__subheading'>{title}</label>
                    <input type="text" name='title' placeholder='Ajouter le titre' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Ajouter du contenu'></textarea>
                    <label htmlFor="download" className='button'>Ajouter une photo pour illustrer votre évènement</label>
                    <input type="file" name="download" id='download' className='downloadInput' onChange={handleMediasChange} />
                    {medias && <img src={medias} alt="Uploaded file" width={'60%'} />}
                    <button className='button'>{save}</button>
                </div>
            )
        )

    } else if (location.pathname.startsWith('/espace-membre/medias')) {
        title = "Titre de l'album";
        save = "Enregistrer l'album";

        return (
            <div className='form createForm'>
                <label htmlFor="title" className='pagePattern__subheading'>{title}</label>
                <input type="text" name='title' placeholder='Ajouter le titre' />
                <label htmlFor="download" className='button'>Importer vos médias</label>
                <input type="file" name="download" id='download' className='downloadInput' onChange={handleMediasChange} />
                {medias && <img src={medias} alt="Uploaded file" width={'60%'} />}
                <button className='button'>{save}</button>
            </div>
        )

    } else if (location.pathname.startsWith('/espace-membre/partitions')) {
        title = "Titre de la partition";
        save = "Engistrer la partition";

        return (


            <div className='form createForm'>
                <label htmlFor="title" className='pagePattern__subheading'>{title}</label>
                <input type="text" name='title' placeholder='Ajouter le titre' />
                <label htmlFor="download" className='button'>Importer la partition</label>
                <input type="file" name="download" id='download' className='downloadInput' onChange={handleMediasChange} />
                {medias && <img src={medias} alt="Uploaded file" width={'60%'} />}
                <button className='button'>{save}</button>
            </div>
        )
    }

    return (
        <div>
            <form method="post">
                <fieldset className='form createForm'>
                    {createFormContent}
                </fieldset>
            </form>
        </div>
    )
}
