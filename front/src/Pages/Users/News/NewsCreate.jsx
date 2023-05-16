import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import CreateForm from '../../../Components/Forms/CreateForm.Component';
// Page NewsCreate qui affiche le formulaire de création d'une nouvelle actualité.
import { useApi } from '../../../Router';

import 'react-quill/dist/quill.snow.css'; // Importez le thème "snow" par défaut
import ReactQuill from 'react-quill';
import { toastNotification, updateToastNotification } from '../../../Router';
import { Link, useNavigate } from 'react-router-dom';

export default function NewsCreate() {

  const [title, setTitle] = useState('');
  const [medias, setMedias] = useState(null);
  const [description, setDescription] = useState('');
  const [richContent, setRichContent] = useState('');
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const handleRichContentChange = (newContent) => {
    setRichContent(newContent);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrors([]);

    let newErrors = [];

    if (!title || title.length < 3) {
      newErrors.push('title');
    }

    if (!medias) {
      newErrors.push('medias');
    }

    if (!description || description.length < 10) {
      newErrors.push('description');
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

      const response = await useApi.news.Create({ title: title, description: description, content: richContent, thumbnail: medias })

      if (!response) {
        return updateToastNotification(toastId, 'error', 'Une erreur est survenue, veuillez réessayer plus tard.');
      }
      if (response.error) {
        // console.log('Une erreur est survenue');
        if (response.message) {
          updateToastNotification(toastId, 'error', 'Une erreur est survenue : ' + response.message + '.')
        } else {
          updateToastNotification(toastId, 'error', 'Une erreur est survenue, veuillez réessayer plus tard.')
        }
      } else {
        updateToastNotification(toastId, 'success', 'L\'article a bien été créé.')
        navigate('/espace-membre/actualites/gestion', { replace: true });
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
      <Helmet><title>La Concordia - Actualités</title></Helmet>

      <div id='category'>
        <h2>Actualités</h2>
        <h3>Création d'une nouvelle actualité</h3>
      </div>
      <Link to='/espace-membre/actualites/gestion' className='returnButton'>
        <i class="fa-solid fa-circle-up fa-rotate-270"></i>
      </Link>
      <div className='usersPage__content'>
        {/* Intégration du composant "CreateForm" */}
        <form onSubmit={(event) => handleSubmit(event)} className='form createForm'>
          <label htmlFor="title" className='usersPage__subheading'>Titre de l'actualité</label>
          <input value={title} onChange={(event) => setTitle(event.currentTarget.value)} type="text" name='title' placeholder='Ajouter le titre' />
          <label htmlFor="description" className='usersPage__subheading'>Description courte</label>
          <textarea value={description} onChange={(event) => setDescription(event.currentTarget.value)} name="description" id="description" placeholder='Ajouter une description courte, exemple : "Bienvenue sur notre site !"'></textarea>
          <label htmlFor="content" className='usersPage__subheading'>Contenu de l'actualité</label>
          <ReactQuill id="content" theme="snow"
            modules={Editor.modules}
            formats={Editor.formats} value={richContent} onChange={handleRichContentChange} />

          <label htmlFor="download" className='greenButton button importButton'>Ajouter une photo pour illustrer votre actualité</label>
          <input type="file" name="download" id='download' className='downloadInput' onChange={handleMediasChange} />
          {medias && <p>{medias.name} uploadé</p>}
          <button className='greenButton saveButton'>Enregistrer</button>
        </form>
      </div>
    </div>
  )
}
