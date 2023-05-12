import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import NewsDatas from './../../../data/News';
import UpdateForm from '../../../Components/Forms/UpdateForm.Component';
import { useApi } from '../../../Router';
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen.Component';

import 'react-quill/dist/quill.snow.css'; // Importez le thème "snow" par défaut
import ReactQuill from 'react-quill';
import { toastNotification, updateToastNotification } from '../../../Router';
import { useNavigate } from 'react-router-dom';

export default function NewsUpdate() {

  const { id } = useParams();
  const [news, setNews] = useState({});
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [richContent, setRichContent] = useState('');
  const [medias, setMedias] = useState(null);
  const [errors, setErrors] = useState([]);
  const [showedImage, setShowedImage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await useApi.news.GetById({ id: id });
      const { data } = result.data;
      setDescription(data.description);
      setTitle(data.title);
      setRichContent(data.content);
      setShowedImage(data.thumbnail)
      setNews(data);
    }
    fetchData();
  }, [])

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrors([]);

    const newErrors = [];

    if (title.length < 3) {
      newErrors.push('title');
    }

    if (description.length < 3) {
      newErrors.push('description');
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    const toastId = toastNotification('loading', 'Veuillez patienter...');

    const response = await useApi.news.Update({ title: title, description: description, content: richContent, thumbnail: medias === null || medias === showedImage ? null : medias, id: id })

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
      updateToastNotification(toastId, 'success', 'L\'article a bien été édité.')
      navigate('/espace-membre/actualites/gestion', { replace: true });
    }

  }

  const handleRichContentChange = (value) => {
    setRichContent(value);
  }

  const handleMediasChange = (e) => {
    setMedias(e.target.files[0]);
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

  return (
    <div className='usersPage'>
      <Helmet><title>La Concordia - Actualié</title></Helmet>

        <div id='category'>
          <h2>Modification de l'actualité "{news.title}"</h2>
        </div>
        
        <div className='usersPage__content'>

          {news.length <= 0 || !news.title ? <LoadingScreen /> : <>
            <form onSubmit={(event) => handleSubmit(event)}>
              <fieldset className='form'>
                <div className='form createForm'>
                  <label htmlFor="title" className='usersPage__subheading'>Titre de l'article</label>
                  <input type="text" name='title' placeholder={"Ajouter le titre"} value={title} onChange={(event) => setTitle(event.currentTarget.value)} />

                  <label htmlFor="description" className='usersPage__subheading'>Description courte</label>
                  <textarea value={description} onChange={(event) => setDescription(event.currentTarget.value)} name="description" id="description" placeholder='Ajouter une description courte, exemple : "Bienvenue sur notre site !"'></textarea>

                  <label htmlFor="content" className='usersPage__subheading'>Contenu de l'article</label>
                  <ReactQuill id="content" theme="snow"
                    modules={Editor.modules}
                    formats={Editor.formats} value={richContent} onChange={handleRichContentChange} />

                  <label htmlFor="download" className='greenButton button importButton'>Ajouter une photo pour illustrer votre évènement</label>
                  <input type="file" name="download" id='download' className='downloadInput' onChange={handleMediasChange} />

                  {medias ? <img src={URL.createObjectURL(medias)} alt="Image de l'article" className='downloadImage' /> : showedImage ? <img src={`${useApi.baseUrl}/images/${showedImage}`} alt="Image de l'article" className='downloadImage' /> : null}

                  <button className='greenButton sendButton'>Mettre à jour</button>
                </div>
              </fieldset>
            </form>
          </>}
        </div>
      </div>
  )
}
