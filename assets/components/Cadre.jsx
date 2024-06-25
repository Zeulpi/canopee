import React from 'react'

export default function Cadre(props) {
  return (
    <div className='text-canBlue about-container w-100 py-2'>
      {props.titre ? <h1 className="text-center">{props.titre}</h1> : null}
      <div className="about row mx-auto">
        <div className="about-left col-12 col-md-6 p-2 d-flex align-items-center" style={props.type==="right"?{
            order: 2,
            borderLeft: '2px solid rgba(105, 43, 133, 0.25)',
            borderRight: 'none'
            }:null}>
          <img
            src={props.image}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="about-right col-12 col-md-6">
            {props.texte}
        </div>
      </div>
    </div>
  )
}
