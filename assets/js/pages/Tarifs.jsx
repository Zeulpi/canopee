import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Titre from '../../components/Titre';

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

    prestas.map((presta, key) =>{
        let prestaObj = {};
        prestaObj["presta"] = presta.nomPresta;
        tarifListe.push(prestaObj);
    })
    publics.map((pub, key)=>{
        let pubObj = {};
        pubObj[pub.categorie] = "";
        tarifListe.map((tarif, key)=>{
            tarif[pub.categorie] = "";
            tarif[pub.categorie+"tva"] = pub['tva'];
        })
    })
    tarifs.map((tarif, key)=>{
        tarifListe.map((elem, cle)=>{
            elem["presta"] == tarif.idPresta.nomPresta ? (elem[tarif.categorie.categorie] = (tarif.prix_tarif/100 + (elem[tarif.categorie.categorie+"tva"]*tarif.prix_tarif/100)/100).toFixed(2)+"€/"+tarif.unite_tarif):null;
        })
    })
    tarifs.map((tarif, key)=>{
        tarifListe.map((elem, cle) =>{
            elem[tarif.categorie.categorie] == '' && prestas[cle]['tarifDefaut']? (elem[tarif.categorie.categorie] = prestas[cle]['tarifDefaut']/100 + "€/" + prestas[cle]['uniteDefaut']):null;
        })
    })
    

  return (
    <div className="tarifs-container">
        <Titre titre="Nos tarifs"/>
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
                {tarifListe.map((tarif, key)=>(
                    <tr key={key} className='text-center'>
                        <td key={key} style={{"border":"1px solid black"}} className='fw-bold'>{tarif["presta"]}</td>
                        {publics.map((pub, cle)=>(
                            <td key={cle} style={{"border":"1px solid black"}}>
                                {tarif[pub.categorie] ? tarif[pub.categorie]:null}
                            </td>
                            ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
