import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';
import News from './Pages/Visitors/Home/News';

export default function Router() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<News />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}