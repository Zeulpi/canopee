import './bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import HomePage from './js/pages/HomePage';
import Header from './components/Header';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';
import AboutPage from './js/pages/AboutPage.jsx';

const App = () => {
    return (
      <HashRouter>
        <Header />
        <main className='container py-5 w-100'>
          <Routes>
            <Route path="/about" Component={ AboutPage } />
            <Route path="/" Component={ HomePage } />
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