import React from 'react'
import logo from '../images/logo-canopees.png'
import { useState, useEffect } from 'react'
import axios from 'axios';
import parse from 'html-react-parser';
import Cadre from './Cadre';

export default function Presentation(props) { 

    const [entr, setEntr] = useState({});
    useEffect(() => {
        function fetchPres() {
            const req = axios.get('http://localhost:8000/api/entreprises/1')
          .then(response => {
            setEntr(response.data);
          })
          .catch(error => {
            console.error('Une erreur est survenue :', error);
          });
          }
          fetchPres();
      }, []);
      
      
      // const description = ''+entr.description+'';
      
  return (
    <Cadre titre="Canopées c'est quoi ?" texte={entr && parse(`${entr.description}`)} type="left" image={logo}/>
  )
}
