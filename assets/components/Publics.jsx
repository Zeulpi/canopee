import React from 'react'
import { useState, useEffect } from 'react'
import parse from 'html-react-parser';
import requetesAPI from '../js/services/requetesAPI';

export default function Publics(props) {
  
  const [publics, setPublics] = useState([]);
  
  const getPublics = async () => {
    try {
        const data = await requetesAPI.findAll('public_cibles')
        setPublics(data);
    }
    catch (error) {
        console.error('Une erreur est survenue :', error);
    };
  }
  useEffect(() => {
    getPublics()
  }, [])

      const handlePubClick = (key) => {
        for (let i = 0; i < publics.length; i++) {
            document.getElementById(`pub${i}`).classList.remove("public-active");
            document.getElementById(`pub-info${i}`).classList.remove("public-info-active");
        }
        document.getElementById(`pub${key}`).classList.add("public-active");
        document.getElementById(`pub-info${key}`).classList.add("public-info-active");
      }
      
    return (
        <div className="public-container w-100 py-2 text-canBlue">
        <h1 className="text-center">Vous êtes :</h1>
        <div className="public col mx-auto">
          <div className="public-cible row mx-auto">
          {publics && publics.map((pub, key) => (
            <div
            id={`pub${key}`}
            key={key}
            className={`col-4 text-center ${key === 0 ? "public-active" : null}`}
            onClick={() => handlePubClick(key)}
            ><h2 key={key} className='fs-4'>{pub.titre}</h2></div>
        ))}
          </div>
          <div className="public-info p-2">
            {publics && publics.map((pub, key) => (
                <div
                id={`pub-info${key}`}
                key={key}
                className={`${key === 0 ? "public-info-active" : null}`}>
                    {parse(pub.description)}
                </div>
            ))}
          </div>
          
        </div>
      </div>
  )
}
