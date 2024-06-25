import React from 'react'
import logo from '../images/logo-canopees.png'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Footer(props) {
  const [reseaux, setReseaux] = useState([]);
    useEffect(() => {
        function fetchData() {
            const req = axios.get('http://localhost:8000/api/reseaux')
          .then(response => {
            setReseaux(response.data["hydra:member"]);
          })
          .catch(error => {
            console.error('Une erreur est survenue :', error);
          });
          }
          fetchData();
      }, []);
      console.log(reseaux);

  return (
    <footer className="bg-canGreen text-center text-canOrange">
        <div className="footer-container row mx-auto w-100 justify-content-center py-1">
          <div className="col-4 d-flex justify-content-center align-items-center"><Link to="/" style={{'textDecoration' : 'none'}}>CGU / CGV / Mentions légales</Link></div>
            <div className="footer-logo col-3 justify-content-center align-items-center row p-2"><img src={logo} alt="" /></div>
            <div className="col-5 d-flex justify-content-center align-items-center col">
            <p className="col-6" id="footer-adress"></p>
            <div className="col-6">
            {reseaux && reseaux.map((value, key) => (
            <a href={value.nom === "email" ? "mailto:"+value.lien : value.lien} key={key}><i
            id={`reseau${key}`}
            key={key}
            className={`px-2 px-lg-3 ${value.icone}`}></i></a>
        ))}
            </div>
        </div>
      </div>
    </footer>
  )
}

