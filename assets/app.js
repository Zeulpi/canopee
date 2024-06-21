import './bootstrap.js';
import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import LoginPage from './js/pages/LoginPage';
import HomePage from './js/pages/HomePage';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';



const App = () => {
    return (
      <BrowserRouter>
        <main className='container pt-5'>
          <Routes>
            <Route path="/login" element={ <LoginPage />} />
            <Route path="/" element={ <HomePage />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);