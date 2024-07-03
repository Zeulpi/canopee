import React from 'react'
import { useState, useEffect } from 'react';
import Mention from '../../components/Mention';
import requetesAPI from '../services/requetesAPI';

export default function Mentions() {
  const [mentions, setMentions] = useState([]);

  const getMentions = async () => {
    try {
      const data = await requetesAPI.findAll('mentions')
      setMentions(data);
    }
    catch (error) {
        console.error('Une erreur est survenue :', error);
    };
  }

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
