import React from 'react'
import Titre from './Titre'
import parse from 'html-react-parser';

export default function Mention(props) {
  return (
    <div className='w-75 mx-auto py-2'>
      <Titre titre={props.titre}/>
      <div className='text-canBlue d-flex justify-content-center border border-2 rounded p-3'>
        {parse(props.texte)}
      </div>
    </div>
  )
}
