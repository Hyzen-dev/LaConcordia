import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import HeaderVisitors from './Components/Visitors/HeaderVisitors.Component';
import UsersPage from './Components/Users/UsersPage';
import { About, Events, EventsDetails, Albums, AlbumDetails, News, NewsDetails } from './Pages/Visitors/Home/exports';
import { Band, Committee, MusicSchool } from './Pages/Visitors/Informations/exports';
import Contact from './Pages/Visitors/Contact/Contact';
import { SignUp, SignIn } from './Pages/Visitors/MemberSpace/exports';
import { EventsCreate, EventsList, EventsUpdate, AlbumsCreate, AlbumsList, AlbumUpdate, Messages, NewsCreate, NewsList, NewsUpdate, Notifications, Profil, SheetsCreate, SheetsList, SheetsUpdate, SheetsUsers, UsersUpdate } from './Pages/Users/exports';
import Footer from './Components/Footer/Footer.Component';
import ApiHandler from './service/ApiHandler';
import LoadingScreen from './Components/LoadingScreen.Component';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useApi = new ApiHandler(localStorage.getItem('accessToken') || null);

export function Router() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <RouterContainer />
    </BrowserRouter>
  );
}

export const toastNotification = (type, message) => {
  return toast[type](message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}

export const updateToastNotification = (id, type, message) => {
  return toast.update(id, { 
    render: message,
    type: type, 
    isLoading: false,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
  })
}

function RouterContainer() {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(Boolean(localStorage.getItem('accessToken')) || false);


  const logout = (reason) => {
    if (reason === "logout") {
      toastNotification('info', 'Vous êtes désormais déconnecté.')
    } else {
      toastNotification('error', 'Votre session a expirée, veuillez vous reconnecter.')
    }
    setUser({})
    setIsLogged(false)
    return localStorage.removeItem('accessToken')
  }

  const fetchProfile = async () => {
    const response = await useApi.user.GetProfile()
    if (response && !response.error) {
      console.log(response.data.data)
      if (response.data.data.deletionDate) return logout();
      setUser(response.data.data)
      setIsLogged(true)
      return true
    } else if (response && response.error) {
      logout()
      return false
    }
  }

  useEffect(() => {
    if (isLogged) {
      fetchProfile()
    }
  }, [])


  const location = useLocation();
  const [isPanelRoute, setIsPanelRoute] = useState(false);

  useEffect(() => {
    setIsPanelRoute(location.pathname.startsWith('/espace-membre'));
  }, [location.pathname]);

  if (isLogged && !user) return <LoadingScreen />;
  return (
    <>
      {isPanelRoute ? <UsersPage logout={logout} isLogged={isLogged} setIsLogged={setIsLogged} user={user} /> : <HeaderVisitors isLogged={isLogged} />}
      <Routes>
        <Route path='/'>
          <Route index element={<News />} />

          <Route path='actualites'>
            <Route index element={<News />} />
            <Route path=':id' element={<NewsDetails />} />
          </Route>

          <Route path='evenements'>
            <Route index element={<Events />} />
            <Route path=':id' element={<EventsDetails />} />
          </Route>

          <Route path='albums'>
            <Route index element={<Albums />} />
            <Route path=':id' element={<AlbumDetails />} />
          </Route>

          <Route path='apropos'>
            <Route index element={<About />} />
          </Route>

          <Route path='informations'>
            <Route path='harmonie-clique' element={<Band />} />
            <Route path='ecole-de-musique' element={<MusicSchool />} />
            <Route path='commission' element={<Committee />} />
          </Route>

          <Route path='contact'>
            <Route index element={<Contact />} />
          </Route>

          {!isLogged || user?.length <= 0 ?
            <>
              <Route path='inscription'>
                <Route index element={<SignUp />} />
              </Route>

              <Route path='connexion'>
                <Route index element={<SignIn fetchProfile={fetchProfile} />} />
              </Route>

              <Route path='*' element={<Navigate to='/' replace />} />
            </>
            :
            <Route path='espace-membre'>

              <Route index element={<Profil user={user} />} />

              <Route path='notifications'>
                <Route index element={<Notifications />} />
              </Route>

              <Route path='messages'>
                <Route index element={<Messages />} />
              </Route>

              <Route path='partitions'>
                <Route path='gestion'>
                  <Route index element={<SheetsList />} />
                  <Route path=':id' element={<SheetsUpdate />} />
                </Route>
                <Route path='mes-partitions' element={<SheetsUsers />} />
                <Route path='creation' element={<SheetsCreate />} />
              </Route>

              <Route path='evenements'>
                <Route path='gestion'>
                  <Route index element={<EventsList />} />
                  <Route path=':id' element={<EventsUpdate />} />
                </Route>
                <Route path='creation' element={<EventsCreate />} />
              </Route>

              <Route path='medias'>
                <Route path='gestion'>
                  <Route index element={<AlbumsList />} />
                  <Route path=':id' element={<AlbumUpdate />} />
                </Route>
                <Route path='creation' element={<AlbumsCreate />} />
              </Route>

              <Route path='actualites'>
                <Route path='gestion'>
                  <Route index element={<NewsList />} />
                  <Route path=':id' element={<NewsUpdate />} />
                </Route>
                <Route path='creation' element={<NewsCreate />} />
              </Route>

              <Route path='utilisateurs'>
                <Route index element={<UsersUpdate />} />
              </Route>
            </Route>
          }
        </Route>
      </Routes>
      <Footer />
    </>)
}