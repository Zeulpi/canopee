import React, { Fragment } from 'react'
import Cadre from '../../components/Cadre'
import { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import Titre from '../../components/Titre';

export default function Prestations() {
    const [prestas, setPrestas] = useState([]);
    const getResult = async () => {
        await axios.get('http://localhost:8000/api/prestations')
        .then(response => {
        setPrestas(response.data["hydra:member"]);
        })
        .catch(error => {
            console.error('Une erreur est survenue :', error);
        });
    }
    useEffect(() => {
        getResult()
    }, [])

    console.log(prestas);
  return (
    <Fragment>
        <Titre titre="Nos prestations"/>
        {prestas && prestas.map((value, key) => (
            <Cadre key={key} nomPresta={value.nomPresta} texte={parse(`${value.descrPresta}`)} type={key % 2 === 0 ? "left" : "right"} image={`images/prestas/${value.icones[0]}`} image2={`images/prestas/${value.icones[1]}`} modale="on" modaleImages={value.images}/>
        ))}
    </Fragment>
  )
}
