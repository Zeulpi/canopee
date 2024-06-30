import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Titre from '../../components/Titre';
import '../../styles/tarifs.css';

export default function Tarifs() {
    const [tarifs, setTarifs] = useState([]);
    const [publics, setPublics] = useState([]);
    const [prestas, setPrestas] = useState([]);
    let tarifListe = [];

    const getTarifs = async () => {
        await axios.get('http://localhost:8000/api/tarives')
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

    const calculTva = ((prix, tva) =>{
        const prixFinal = (prix + prix*(tva/100));
        return prixFinal.toFixed(2);
    })
    

    // Du fait dont les tarifs, prestations et publics sont stockés, il faut extraire les données relatives a chaque entité, et peupler un tableau qui regroupe les tarifs pour chaque prestation, avec un prix différent par public, calculé en fonction de sa tva
    const remplirTarifs = () => {
        // La liste des tarifs aura une entrée pour chaque prestation
        prestas.forEach((presta, key) =>{
            tarifListe[key] = {"presta":presta.nomPresta};
        })
        // La liste de tarifs aura un prix par prestation et par public
        publics.forEach((pub)=>{
            tarifListe.forEach((tarif)=>{
                tarif[pub.categorie] = "";
            })
        })
        // Maintenant pour chaque prestation, le prix par public est ajouté, en tenant compte de sa propre tva
        tarifs.forEach((tarif, key)=>{
            tarifListe.map((tarifPublic, cle)=>{
                tarifPublic["presta"] == tarif.idPresta.nomPresta ?
                (tarifPublic[tarif.categorie.categorie] =
                    calculTva(tarif.prix_tarif/100, tarif.categorie.tva) + "€/" +tarif.unite_tarif)
                :null;
            })
        })
        // Si aucun tarif n'est défini pour une prestation et un public donné, on applique le prix par défaut de cette prestation au public en question (en tenant compte de la tva par defaut)
        // Si aucun tarif et unite par default ne sont définis, le tarif de Prestation "x" pour le Public "y" sera vide
        tarifs.forEach((tarif)=>{
            tarifListe.map((tarifPublic, cle) =>{
                tarifPublic[tarif.categorie.categorie] == '' && prestas[cle]['tarifDefaut'] && prestas[cle]['uniteDefaut'] ?
                (tarifPublic[tarif.categorie.categorie] =
                    calculTva(prestas[cle]['tarifDefaut']/100, tarif.categorie.tva) + "€/"+prestas[cle]['uniteDefaut'])
                :null;
            })
        })
    }

    remplirTarifs();

    


  return (
    <div className="tarifs-container py-3">
        <Titre titre="Nos tarifs (TTC)"/>
        <table className="tablecustom pt-5">
            <thead className='text-center'>
                <tr>
                    <th></th>
                    {publics.map((pub, key)=>(
                        <th key={key}>{pub.categorie}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tarifListe.map((tarif, key)=>(
                    <tr key={key} className='text-center'>
                        <td key={key} className='fw-bold'>{tarif["presta"]}</td>
                        {publics.map((pub, cle)=>(
                            <td key={cle} >
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
