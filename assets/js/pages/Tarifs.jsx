import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

export default function Tarifs() {
    const [tarifs, setTarifs] = useState([]);
    const [publics, setPublics] = useState([]);
    const [prestas, setPrestas] = useState([]);
    let tarifListe = [];
    let publicListe = [];
    let prestaListe = [];

    const getTarifs = async () => {
        const req = await axios.get('http://localhost:8000/api/tarives')
        .then(response => {
            setTarifs(response.data["hydra:member"]);
        })
        .catch(error => {
            console.error('Une erreur est survenue :', error);
        });
    }
    const getPublics = async () => {
        await axios.get('http://localhost:8000/api/public_cibles')
        .then(response => {
        setPublics(response.data["hydra:member"]);
        })
        .catch(error => {
            console.error('Une erreur est survenue :', error);
        });
    }
    const getPrestas = async () => {
        await axios.get('http://localhost:8000/api/prestations')
        .then(response => {
        setPrestas(response.data["hydra:member"]);
        })
        .catch(error => {
            console.error('Une erreur est survenue :', error);
        });
    }
    useEffect(() => {
        getTarifs()
        getPublics()
        getPrestas()
    }, [])

    // let pubListe = [];
    // publics.map(element =>{
    //     pubListe.push(element.categorie);
    // })
    
    

  return (
    <div className="tarifs-container w-100 py-2 text-canBlue">
        <h1 className="text-center">Nos tarifs</h1>
        <table style={{"width": "80%"}} className='mx-auto'>
            <thead className='text-center'>
                <tr>
                    <th></th>
                    {publics.map((element, key)=>(
                        <th key={key} style={{"border":"1px solid black"}}>{element.categorie}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                    {prestas.map((element, key) =>(
                        <tr key={key} className='text-center'>
                            <td key={key} style={{"border":"1px solid black"}} className='fw-bold'>{element.nomPresta}</td>
                            {publics.map((pub, cle)=>(
                                <td key={cle} style={{"border":"1px solid black"}}>{tarifs.map((tarif)=>(tarif.idPresta.nomPresta === element.nomPresta  && tarif.categorie.categorie === pub.categorie ?
                                    `(${tarif.prix_tarif/100}€HT) ${(tarif.prix_tarif/100)+(pub.tva*tarif.prix_tarif/100)/100}€TTC/${tarif.unite_tarif}`:null))}
                                </td>
                            ))}
                        </tr>
                    ))}
            </tbody>
        </table>
    </div>
  )
}
