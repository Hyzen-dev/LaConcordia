import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AlbumsData from './../../data/Albums';
import EventsData from './../../data/Events';
import NewsData from './../../data/News';
import SheetsData from './../../data/Sheets';



export default function UpdateForm() {

    const location = useLocation();

    // Utilisation du Hook useParams afin de récupérer l'id de l'album concerné via les paramètres de l'url actuel.
    const { id } = useParams();

    // Création de la variable album correspondant à l'album actuel.
    const event = EventsData.find((event) => event.id === parseInt(id));
    const news = NewsData.find((news) => news.id === parseInt(id));
    const album = AlbumsData.find((album) => album.id === parseInt(id));
    const sheet = SheetsData.find((sheet) => sheet.id === parseInt(id));


    const [medias, setMedias] = useState(null);

    let title;
    let save;
    let updateFormContent;

    const handleMediasChange = (event) => {
        setMedias(URL.createObjectURL(event.target.files[0]));
    }



    if (location.pathname.startsWith('/espace-membre/evenement')) {
        title = "Titre de l'évènement :";
        save = "Enregistrer les modifications";

        updateFormContent = (
            <div className='form createForm'>
                <label htmlFor="title" className='pagePattern__subheading'>{title}</label>
                <input type="text" name='title' value={event.title} />
                <textarea name="" id="" cols="30" rows="10" value={event.content}></textarea>
                <label htmlFor="download" className='button'>Ajouter une photo pour illustrer votre évènement</label>
                <input type="file" name="download" id='download' className='downloadInput' onChange={handleMediasChange} />
                {medias && <img src={medias} alt="Uploaded file" width={'60%'} />}
                <button className='button'>{save}</button>
            </div>
        )


    } else if (location.pathname.startsWith('/espace-membre/actualite')) {
        title = "Titre de l'actualité :";
        save = "Engistrer les modifications";

        return (
            updateFormContent = (
                <div className='form createForm'>
                    <label htmlFor="title" className='pagePattern__subheading'>{title}</label>
                    <input type="text" name='title' value={news.title} />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Ajouter du contenu' value={news.content}></textarea>
                    <label htmlFor="download" className='button'>Ajouter une photo pour illustrer votre évènement</label>
                    <input type="file" name="download" id='download' className='downloadInput' onChange={handleMediasChange} />
                    {medias && <img src={medias} alt="Uploaded file" width={'60%'} />}
                    <button className='button'>{save}</button>
                </div>
            )
        )

    } else if (location.pathname.startsWith('/espace-membre/medias')) {
        title = "Titre de l'album :";
        save = "Enregistrer les modifications";

        return (
            updateFormContent = (
                <div className='form createForm'>
                    <label htmlFor="title" className='pagePattern__subheading'>{title}</label>
                    <input type="text" name='title' value={album.name} />
                    <label htmlFor="download" className='button'>Importer vos médias</label>
                    <input type="file" name="download" id='download' className='downloadInput' onChange={handleMediasChange} />
                    {medias && <img src={medias} alt="Uploaded file" width={'60%'} />}
                    <button className='button'>{save}</button>
                </div>
            )
        )

    } else if (location.pathname.startsWith('/espace-membre/partitions')) {
        title = "Titre de la partition :";
        save = "Engistrer les modifications";

        return (
            updateFormContent = (
                <div className='form createForm'>
                    <label htmlFor="title" className='pagePattern__subheading'>{title}</label>
                    <input type="text" name='title' value={sheet.title} />
                    <label htmlFor="download" className='button'>Importer la partition</label>
                    <input type="file" name="download" id='download' className='downloadInput' onChange={handleMediasChange} />
                    {medias && <img src={medias} alt="Uploaded file" width={'60%'} />}
                    <button className='button'>{save}</button>
                </div>
            )
        )
    }

    return (
        <div>
            <form method="post">
                <fieldset className='form createForm'>
                    {updateFormContent}
                </fieldset>
            </form>
        </div>
    )
}
