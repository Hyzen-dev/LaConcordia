import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HeaderVisitors from './Components/Visitors/HeaderVisitors.Component';
import UsersPage from './Components/Users/UsersPage';
import { About, Events, EventsDetails, Albums, AlbumDetails, News, NewsDetails } from './Pages/Visitors/Home/exports';
import { Band, Committee, MusicSchool } from './Pages/Visitors/Informations/exports';
import Contact from './Pages/Visitors/Contact/Contact';
import { SignUp, SignIn } from './Pages/Visitors/MemberSpace/exports';
import { EventsCreate, EventsList, EventsUpdate, AlbumsCreate, AlbumsList, AlbumUpdate, Messages, NewsCreate, NewsList, NewsUpdate, Notifications, Profil, SheetsCreate, SheetsList, SheetsUpdate, SheetsUsers, UsersUpdate } from './Pages/Users/exports';
import Footer from './Components/Footer/Footer.Component';


export default function Router() {
  return (
    <BrowserRouter>
      <RouterContainer />
    </BrowserRouter>
  );
}


function RouterContainer() {

  const location = useLocation();
  const [isPanelRoute, setIsPanelRoute] = useState(false);

  useEffect(() => {
    setIsPanelRoute(location.pathname.startsWith('/espace-membre'));
  }, [location.pathname]);
  return (
    <>
      {isPanelRoute ? <UsersPage /> : <HeaderVisitors />}
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

          <Route path='inscription'>
            <Route index element={<SignUp />} />
          </Route>

          <Route path='connexion'>
            <Route index element={<SignIn />} />
          </Route>

          <Route path='espace-membre'>
            <Route path=':id' element={<Profil />} />

            <Route index element={<Profil />} />

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
        </Route>
      </Routes>
      <Footer />
    </>)
}