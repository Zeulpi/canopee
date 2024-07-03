import React, { Fragment } from 'react'
import Cadre from '../../components/Cadre'
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import Titre from '../../components/Titre';
import requetesAPI from '../services/requetesAPI';

export default function Prestations() {
    const [prestas, setPrestas] = useState([]);

    const getPrestas = async () => {
        try {
            const data = await requetesAPI.findAll('prestations')
            setPrestas(data);
        }
        catch (error) {
            console.error('Une erreur est survenue :', error);
        };
    }
    useEffect(() => {
        getPrestas()
    }, [])

  return (
    <Fragment>
        <Titre titre="Nos prestations"/>
        {prestas && prestas.map((value, key) => (
            <Cadre key={key} nomPresta={value.nomPresta} texte={parse(`${value.descrPresta}`)} type={key % 2 === 0 ? "left" : "right"} image={`images/prestas/${value.icones[0]}`} image2={`images/prestas/${value.icones[1]}`} modale="on" modaleImages={value.images} modaleSize="xl" />
        ))}
    </Fragment>
  )
}
