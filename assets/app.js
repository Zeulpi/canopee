import './bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import HomePage from './js/pages/HomePage';
import Header from './components/Header';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop.jsx';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';
import AboutPage from './js/pages/AboutPage.jsx';
import Prestations from './js/pages/Prestations.jsx';
import Tarifs from './js/pages/Tarifs.jsx';
import Contact from './js/pages/Contact.jsx';
import Mentions from './js/pages/Mentions.jsx';

const App = () => {
    return (
      <HashRouter>
        <Header />
        <main className='container py-3 w-100'>
          <Routes>
            <Route path="/about" Component={ AboutPage } />
            <Route path="/prestas" Component={ Prestations } />
            <Route path="/tarifs" Component={ Tarifs } />
            <Route path="/contact" Component={ Contact } />
            <Route path="/mentions" Component={ Mentions } />
            <Route path="/" Component={ HomePage } />
          </Routes>
        </main>
        <ScrollTop />
        <Footer />
      </HashRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);