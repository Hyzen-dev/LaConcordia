import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';

export default function Router() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}