import React from 'react'
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import CarteMembre from './CarteMembre';

export default function Team(props) {

    const [team, setTeam] = useState([]);
    
    const getResult = async () => {
        await axios.get('http://localhost:8000/api/users', { params: {roles: 'ROLE_EMPLOYE'}})
        .then(response => {
        setTeam(response.data["hydra:member"]);
        })
        .catch(error => {
            console.error('Une erreur est survenue :', error);
        });
    }
    useEffect(() => {
        getResult()
    }, [])


  return (
    <div className="team-container col justify-content-center">
      <h1 className="text-center text-canBlue pb-3">Découvrez nous</h1>
      <div className="team row justify-content-between gx-0 mx-auto">
      {team && team.map((value, key) => (
            <CarteMembre key={key} membre={value}/>
        ))}
      </div>
    </div>
  )
}
