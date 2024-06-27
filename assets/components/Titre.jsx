import React from 'react'

export default function Titre(props) {
  return (
    <div className={`w-100 text-center text-canBlue ${props.py ? "py-"+props.py:null} ${props.pt ? "pt-"+props.pt:null} ${props.pb ? "pb-"+props.pb:null}`}>
      <h1>{props.titre}</h1>
    </div>
  )
}
