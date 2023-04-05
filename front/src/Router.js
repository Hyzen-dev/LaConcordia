import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer.Component';
import Header from './Components/Header.Component';
import { About, Events, EventsDetails, Medias, MediasDetails, News, NewsDetails } from './Pages/Visitors/Home/exports';
import { Band, Committee, MusicSchool } from './Pages/Visitors/Informations/exports';
import Contact from './Pages/Visitors/Contact/Contact';
import SignUp from './Pages/Visitors/MemberSpace/SignUp';



const medias = [
  {
      id: 1,
      title: "TITRE DE L'ALBUM 1",
      image1: 'image 1.1',
      image2: 'image 1.2',
      image3: 'image 1.3',  },
  {
      id: 2,
      title: "TITRE DE L'ALBUM 2",
      image1: 'image 2.1',
      image2: 'image 2.2',
      image3: 'image 2.3',  },
  {
    id: 3,
    title: "TITRE DE L'ALBUM 3",
    image1: 'image 3.1',
    image2: 'image 3.2',
    image3: 'image 3.3',  },
  {
    id: 4,
    title: "TITRE DE L'ALBUM 4",
    image1: 'image 4.1',
    image2: 'image 4.2',
    image3: 'image 4.3',  },
  {
    id: 5,
    title: "TITRE DE L'ALBUM 5",
    image1: 'image 5.1',
    image2: 'image 5.2',
    image3: 'image 5.3',
  }
  ];









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
              <Route index element={<Medias medias={medias} />} />
              <Route path=':id' element={<MediasDetails medias={medias} />} />
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

          </Route>
        </Routes>

        <Footer />
    </BrowserRouter>
  )
}