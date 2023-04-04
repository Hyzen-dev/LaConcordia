import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Test from './Pages/Test';

export default function Router() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Test />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}