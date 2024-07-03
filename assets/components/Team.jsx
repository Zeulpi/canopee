import React from 'react'
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import CarteMembre from './CarteMembre';
import requetesAPI from '../js/services/requetesAPI';

export default function Team(props) {

    const [team, setTeam] = useState([]);
    
    const getTeam = async () => {
      try {
        const data = await requetesAPI.findTeam( 'ROLE_EMPLOYE' )
        setTeam(data);
      }
      catch (error) {
          console.error('Une erreur est survenue :', error);
      };
    }
      useEffect(() => {
        getTeam()
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
