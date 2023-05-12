import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css'; // Importez le thème "snow" par défaut
import ReactQuill from 'react-quill';
// Composant CreateForm, utilisé sur les pages "EventsCreate", "AlbumsCreate", "NewsCreate" et "SheetsCreate".

export default function CreateForm({ setFile }) {

    // Utilisation du hook useLocation afin de déterminer l'url actuel
    const location = useLocation();

    // Utilisation du Hook useState afin de définir la variable "medias" ainsi que son état. "medias" correspond à la photo de couverture permet d'illustrer les albums et les articles mais également au fichier de partition ajouté.
    const [medias, setMedias] = useState(null);
    const [richContent, setRichContent] = useState('');

    const handleRichContentChange = (newContent) => {
        setRichContent(newContent);
    };

    const Editor = {};
    Editor.modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        }
    }
    /* 
     * Quill editor formats
     * See https://quilljs.com/docs/formats/
     */
    Editor.formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ]

    // Création des variables "title", "save", "createFormContent" qui seront modifiées en fonction de la page sur laquelle le composant est intégré.
    let title;
    let createFormContent;

    // Création de la fonction "handleMediasChange" qui permet l'affichage sur la page de la photo de couverture ou la partition choisi par l'utilisateur grace au bouton "Ajouter".
    const handleMediasChange = (event, type) => {
        console.log(event.target)
        setMedias(URL.createObjectURL(event.target.files[0]));
        if (type === "partition") {
            setFile(URL.createObjectURL(event.target.files[0]));
        }
    }


    // En fonction de l'url actuel, le titre, le bouton d'enregistrement et le contenu du formulaire sont adaptés afin que le composant soit utilisés sur l'ensemble des pages "Create"

    if (location.pathname.startsWith('/espace-membre/evenement')) {

        createFormContent = (
            <div className='form createForm'>
                <label htmlFor="title" className='pagePattern__subheading'>Titre de l'évènement</label>
                <input type="text" name='title' placeholder='Ajouter le titre' />
                <textarea name="" id="" cols="30" rows="10" placeholder='Ajouter du contenu'></textarea>
                <label htmlFor="download" className='greenButton button importButton'>Ajouter une photo pour illustrer votre évènement</label>
                <input type="file" name="download" id='download' className='downloadInput' onChange={handleMediasChange} />
                {medias && <img src={medias} alt="Uploaded file" width={'60%'} />}
                <button className='greenButton saveButton'>Enregistrer</button>
            </div>
        )


    } else if (location.pathname.startsWith('espace-membre/actualites')) {

        createFormContent = (
            <div className='form createForm'>
                <label htmlFor="title" className='pagePattern__subheading'>Titre de l'actualité</label>
                <input type="text" name='title' placeholder='Ajouter le titre' />
                <textarea name="" id="" cols="30" rows="10" placeholder='Ajouter du contenu'></textarea>
                <ReactQuill theme="snow"
                    modules={Editor.modules}
                    formats={Editor.formats} value={richContent} onChange={handleRichContentChange} />

                <label htmlFor="download" className='greenButton button importButton'>Ajouter une photo pour illustrer votre actualité</label>
                <input type="file" name="download" id='download' className='downloadInput' onChange={handleMediasChange} />
                {medias && <img src={medias} alt="Uploaded file" width={'60%'} />}
                <button className='greenButton saveButton'>Enregistrer</button>
            </div>
        )


    } else if (location.pathname.startsWith('/espace-membre/medias')) {

        return (
            createFormContent = (
                <div className='form createForm'>
                    <label htmlFor="title" className='pagePattern__subheading'>Titre de l'album</label>
                    <input type="text" name='title' placeholder='Ajouter le titre' />
                    <label htmlFor="download" className='greenButton button importButton'>Importer vos médias</label>
                    <input type="file" name="download" id='download' className='downloadInput' onChange={handleMediasChange} />
                    {medias && <img src={medias} alt="Uploaded file" width={'60%'} />}
                    <button className='greenButton saveButton'>Enregistrer</button>
                </div>
            )
        )

    } else if (location.pathname.startsWith('/espace-membre/partitions')) {
        title = "Titre de la partition";

        return (
            createFormContent = (
                <div className='form createForm'>
                    <label htmlFor="title" className='pagePattern__subheading'>{title}</label>
                    <input type="text" name='title' placeholder='Ajouter le titre' />
                    <label htmlFor="download" className='greenButton button importButton'>Importer</label>
                    <input type="file" name="download" id='download' className='downloadInput' onChange={(event) => handleMediasChange(event, "partition")} />
                    {medias && <img src={medias} alt="Uploaded file" width={'60%'} />}
                    <button className='greenButton saveButton'>Enregistrer</button>
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
