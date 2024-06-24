import './bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import LoginPage from './js/pages/LoginPage';
import HomePage from './js/pages/HomePage';
import Header from './components/Header.jsx';
import authAPI from './js/services/authAPI.js';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';


// authAPI.setup();

const App = () => {
    return (
      <HashRouter>
        <Header />
        <main className='container py-5'>
          <Routes>
            <Route exact path="/" element={ <HomePage />} />
          </Routes>
        </main>
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