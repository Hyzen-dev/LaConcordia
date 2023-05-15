import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Sweetpagination from 'sweetpagination';
import MediasCard from '../../../Components/Cards/MediasCard.Component';
import AlbumsDatas from '../../../data/Albums';
import PhotosDatas from '../../../data/Photos';
import { useApi } from '../../../Router';
import MainLoadingScreen from '../../../Components/LoadingScreen/MainLoadingScreen.Component';
// Page AlbumDetail, qui renvoi l'ensemble des médias de l'album sur lequel l'utilisateur à cliqué.

export default function AlbumDetails() {

    // Utilisation du Hook useState pour définir les données de la page actuelle et leur états. "currentPageData" est initialisé avec un tableau de deux cases vides grâce à la méthode "fill()" d'un nouvel objet Array. Cette variable est utilisée par "SweetPagination" pour afficher les médias de la page courante.
    const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

    // Création des variables 
    const [album, setAlbum] = useState({})
    const [allMedias, setAllMedias] = useState([])
    const [selectedMedias, setSelectedMedias] = useState({})

    // Récupération de l'id de l'album via les params
    const { id } = useParams();


    // Récupération de l'album en fonction de son id récupéré dans les params
    const fetchAlbum = async () => {
        const response = await useApi.albums.GetById({ id: parseInt(id) });
        setAlbum(response.data.data.album);
        setAllMedias(response.data.data.medias);
        return true;
    }
    useEffect(() => {
        fetchAlbum()
    }, []);


    // // Récupération de tous les médias en fonction de l'albumId récupéré dans les params
    // const fetchAllMedias = async () => {
    //     const response = await useApi.medias.GetByAlbumId({ albumId: parseInt(id) });
    //     return setAllMedias(response.data.data);
    // }
    // useEffect(() => {
    //     fetchAllMedias()
    // }, []);


    // console.log(album)
    // console.log(allMedias)



    // Récupération du médias selectionné
    // const fetchSelectedMedias = async () => {
    //     const response = await useApi.medias.GetById({ id: "???" });
    //     return setSelectedMedias(response.data.data);
    // }
    // useEffect(() => {
    //     fetchSelectedMedias()
    // }, []);


    return (
        <div className='pagePattern'>
            <Helmet><title>La Concordia - Galerie médias</title></Helmet>

            <div id='category'>
                <h2>Galerie médias</h2>
                <h3>{album.title}</h3>
            </div>

            <div className='pagePattern__cardsContent'>
                {album.length <= 0 || allMedias.length <= 0 ? <MainLoadingScreen /> : <>

                    {allMedias.length <= 0 || !allMedias[0]?.file ?
                        <MainLoadingScreen /> :
                        <div>
                            <div className='cardsContainer'>
                                {/* Utilisation d'une expression JSX qui vérifie si currentPageData existe et contient au moins un élément avec une propriété name. Si c'est le cas, la méthode map() est utilisée pour créer une nouvelle liste de Composants MediasCard. Si currentPageData est vide ou n'a pas de propriété name, rien n'est renvoyé. */}
                                {currentPageData && currentPageData[0]?.file && currentPageData.length > 0 ? currentPageData.map((item, k) => (
                                    <MediasCard selectedCard={selectedMedias} setSelectedCard={setSelectedMedias} mediasCard={item} key={k} album={album.title} />
                                )) : null}
                            </div>

                            <div className='pagination'>

                                {/* Intégration du module SweetPagination, qui permet l'affichage de 6 cartes médias par page */}
                                <Sweetpagination
                                    currentPageData={setCurrentPageData}
                                    dataPerPage={6}
                                    getData={allMedias}
                                    navigation={true}
                                    getStyle={'pagination-style'}
                                />
                            </div >
                        </div>
                    }
                </>}
            </div>
        </div>
    )
}