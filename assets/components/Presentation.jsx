import React from 'react'
import logo from '../images/logo-canopees.png'
import { useState, useEffect } from 'react'
import parse from 'html-react-parser';
import Cadre from './Cadre';
import Titre from './Titre';
import requetesAPI from '../js/services/requetesAPI';

export default function Presentation(props) { 
  const [entr, setEntr] = useState({});

  const getCompany = async() => {
    try {
      const data = await requetesAPI.findOne('entreprises', 1)
      setEntr(data);
    }
    catch (error) {
      console.error('Une erreur est survenue :', error);
    };
  }

  useEffect(() => {
    getCompany()
  }, [])
      
  return (
    <>
      <Titre titre="Canopées c'est quoi ?" pt="3"/>
      <Cadre texte={entr && parse(`${entr.description}`)} type="left" image={logo}/>
    </>
  )
}
