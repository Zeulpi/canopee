import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Mention from '../../components/Mention';

export default function Mentions() {
  const [mentions, setMentions] = useState([]);
  const getMentions = async () => {
    await axios.get('http://localhost:8000/api/mentions')
    .then(response => {
    setMentions(response.data["hydra:member"]);
    })
    .catch(error => {
        console.error('Une erreur est survenue :', error);
    });
  }

  console.log(mentions);

useEffect(() => {
    getMentions()
}, [])

  return (
    <div>    
      {mentions && mentions.map((mention, key) => (
            <Mention key={key} titre={mention.nom} texte={mention.texte}/>
        ))}
      
    </div>
  )
}
