import React from 'react'
import logo from '../images/logo-canopees.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import requetesAPI from '../js/services/requetesAPI';


export default function Footer(props) {
  const [reseaux, setReseaux] = useState([]);
  const [entr, setEntr] = useState({});


  const getReseaux = async () => {
    try {
      const data = await requetesAPI.findAll('reseaux')
      setReseaux(data);
    }
    catch (error) {
        console.error('Une erreur est survenue :', error);
    };
  }
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
    getReseaux()
    getCompany()
  }, [])

  return (
    <footer className="bg-canGreen text-center text-canOrange">
        <div className="footer-container row mx-auto w-100 justify-content-center py-1">
          <div className="col-4 d-flex justify-content-center align-items-center"><Link to="/mentions" style={{'textDecoration' : 'none'}}>CGU / CGV / Mentions légales</Link></div>
            <div className="footer-logo col-3 justify-content-center align-items-center row p-2"><img src={logo} alt="" /></div>
            <div className="col-5 d-flex justify-content-center align-items-center col">
            <p className="col-6 text-canOrange" id="footer-adress">{entr.adresse}<br/>{entr.tel}</p>
            <div className="col-6">
            {reseaux && reseaux.map((reseau, key) => (
            <a href={reseau.nom === "email" ? "mailto:"+reseau.lien : reseau.lien} key={key}><i
            id={`reseau${key}`}
            key={key}
            className={`px-2 px-lg-3 ${reseau.icone}`}></i></a>
        ))}
            </div>
        </div>
      </div>
    </footer>
  )
}

