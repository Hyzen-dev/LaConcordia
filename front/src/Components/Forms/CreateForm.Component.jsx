import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

// Composant CreateForm, utilisé sur les pages "EventsCreate", "AlbumsCreate", "NewsCreate" et "SheetsCreate".

export default function CreateForm() {

    // Utilisation du hook useLocation afin de déterminer l'url actuel
    const location = useLocation();

    // Utilisation du Hook useState afin de définir la variable "medias" ainsi que son état. "medias" correspond à la photo de couverture permet d'illustrer les albums et les articles mais également au fichier de partition ajouté.
    const [medias, setMedias] = useState(null);

    // Création des variables "title", "save", "createFormContent" qui seront modifiées en fonction de la page sur laquelle le composant est intégré.
    let title;
    let save;
    let createFormContent;

    // Création de la fonction "handleMediasChange" qui permet l'affichage sur la page de la photo de couverture ou la partition choisi par l'utilisateur grace au bouton "Ajouter".
    const handleMediasChange = (event) => {
        setMedias(URL.createObjectURL(event.target.files[0]));
    }


    // En fonction de l'url actuel, le titre, le bouton d'enregistrement et le contenu du formulaire sont adaptés afin que le composant soit utilisés sur l'ensemble des pages "Create"

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
            createFormContent = (
                <div className='form createForm'>
                    <label htmlFor="title" className='pagePattern__subheading'>{title}</label>
                    <input type="text" name='title' placeholder='Ajouter le titre' />
                    <label htmlFor="download" className='button'>Importer vos médias</label>
                    <input type="file" name="download" id='download' className='downloadInput' onChange={handleMediasChange} />
                    {medias && <img src={medias} alt="Uploaded file" width={'60%'} />}
                    <button className='button'>{save}</button>
                </div>
            )
        )

    } else if (location.pathname.startsWith('/espace-membre/partitions')) {
        title = "Titre de la partition";
        save = "Engistrer la partition";

        return (
            createFormContent = (
                <div className='form createForm'>
                    <label htmlFor="title" className='pagePattern__subheading'>{title}</label>
                    <input type="text" name='title' placeholder='Ajouter le titre' />
                    <label htmlFor="download" className='button'>Importer la partition</label>
                    <input type="file" name="download" id='download' className='downloadInput' onChange={handleMediasChange} />
                    {medias && <img src={medias} alt="Uploaded file" width={'60%'} />}
                    <button className='button'>{save}</button>
                </div>
            )
        )
    }

    // Affichage du formulaire dont le contenu "createFormContent" dépend de l'url actuel.
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
