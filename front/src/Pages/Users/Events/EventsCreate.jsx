import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useApi } from '../../../Router';

import 'react-quill/dist/quill.snow.css'; // Importez le thème "snow" par défaut
import ReactQuill from 'react-quill';
import { toastNotification, updateToastNotification } from '../../../Router';
import { Link, useNavigate } from 'react-router-dom';

export default function EventsCreate() {

  const [title, setTitle] = useState('');
  const [medias, setMedias] = useState(null);
  const [eventDate, setEventDate] = useState('');
  const [richContent, setRichContent] = useState('');
  const [errors, setErrors] = useState([]);
  const currentDate = new Date()
  
  const navigate = useNavigate();

  const handleRichContentChange = (eventContent) => {
    setRichContent(eventContent);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrors([]);

    let newErrors = [];

    if (!title || title.length < 3) {
      newErrors.push('title');
    }

    if (!eventDate) {
      newErrors.push('eventDate')
    }

    if (!medias) {
      newErrors.push('medias');
    }

    if (!richContent || richContent.length < 10) {
      newErrors.push('richContent');
    }

    if (newErrors.length > 0) {
      console.log('Formulaire non envoyé')
      console.log(newErrors)
      return setErrors(newErrors);
    } else {

      const toastId = toastNotification('loading', 'Veuillez patienter...');

      const response = await useApi.events.Create({ title: title, content: richContent, eventDate: eventDate, thumbnail: medias })
      
      if (!response) {
        return updateToastNotification(toastId, 'error', 'Une erreur est survenue, veuillez réessayer plus tard.');
      }
      if (response.error) {
        if (response.message) {
          updateToastNotification(toastId, 'error', 'Une erreur est survenue : ' + response.message + '.')
        } else {
          updateToastNotification(toastId, 'error', 'Une erreur est survenue, veuillez réessayer plus tard.')
        }
      } else {
        updateToastNotification(toastId, 'success', 'L\'article a bien été créé.')
        navigate('/espace-membre/evenements/gestion', { replace: true });
      }
    };
  }

  const Editor = {
    modules: {
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
    },
    formats: [
      'header', 'font', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'video'
    ]
  };

  const handleMediasChange = (event, type) => {
    console.log(event.target)
    setMedias(event.target.files[0]);
  }

  return (
    <div className='usersPage'>
      <Helmet><title>La Concordia - Évenement</title></Helmet>

      <div id='category'>
        <h2>Évenement</h2>
        <h3>Création d'un nouvel évènement</h3>
      </div>

      <Link to='/espace-membre/evenements/gestion' className='returnButton'>
        <i class="fa-solid fa-circle-up fa-rotate-270"></i>
      </Link>

      <div className='usersPage__content'>
        <form onSubmit={(event) => handleSubmit(event)} className='form createForm'>

          <label htmlFor="title" 
          className='usersPage__subheading'>
          Titre de l'évènement
          </label>

          <input 
          value={title} 
          onChange={(event) => setTitle(event.currentTarget.value)}
          type="text"
          name='title'
          id='title'
          placeholder='Ajouter le titre' />

          <label 
          htmlFor="date" 
          className='usersPage__subheading'>
          Date de l'évènement
          </label>

          <input
          value={eventDate}
          onChange={(event) => setEventDate(event.currentTarget.value)}
          type="date"
          name='eventDate'
          id='date' />

          <label
          htmlFor="content" 
          className='usersPage__subheading'>
          Descriptif de l'évènement
          </label>

          <ReactQuill id="content" theme="snow"
            modules={Editor.modules}
            formats={Editor.formats} value={richContent} onChange={handleRichContentChange} />

          <label
          htmlFor="download"
          className='greenButton button importButton'>
          Ajouter une photo pour illustrer votre évènement
          </label>

          <input
          type="file"
          name="download"
          id='download'
          className='downloadInput'
          onChange={handleMediasChange} />

          {medias && <p>{medias.name} uploadé</p>}
          
          <button className='greenButton saveButton'>Enregistrer</button>
        </form>
      </div>
    </div>
  )
}
