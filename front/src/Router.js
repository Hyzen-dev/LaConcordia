import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer.Component';
import Header from './Components/Header.Component';
import { About, Events, EventsDetails, Medias, MediasDetails, News, NewsDetails } from './Pages/Visitors/Home/exports';
import { Band, Committee, MusicSchool } from './Pages/Visitors/Informations/exports';
import Contact from './Pages/Visitors/Contact/Contact';
import { SignUp, SignIn } from './Pages/Visitors/MemberSpace/exports';


export default function Router() {
  return (
    <BrowserRouter>
        <Header />

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
            <Route path='medias'>
              <Route index element={<Medias />} />
              <Route path=':id' element={<MediasDetails />} />
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

          </Route>
        </Routes>

        <Footer />
    </BrowserRouter>
  )
}