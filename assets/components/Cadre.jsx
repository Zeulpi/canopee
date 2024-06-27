import React from 'react'
import { useState } from 'react';
import Modale from './Modale';

export default function Cadre(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className='text-canBlue about-container w-100'>
        {props.titre ? <h1 className="text-center">{props.titre}</h1> : null}
        <div className="about row mx-auto">
          <div className={`about-left col-12 col-md-6 p-2 d-flex justify-content-center ${props.image2 ? "row" : null}`} style={props.type==="right"?{
              order: 2,
              borderLeft: '2px solid rgba(105, 43, 133, 0.25)',
              borderRight: 'none'
              }:null}>
            <div className="about-img align-self-center justify-content-center row">
              <img
                src={props.image}
                alt=""
                className={props.image2 ? null : "img-fluid"}
                style={props.image2 ?{'maxWidth' : '40%'}:null}
              />
              {props.image2 ?
              <img
              src={props.image2}
              alt=""
              style={{'maxWidth' : '40%'}}
              />
              : null
              }
              
            </div>
            {props.modale === "on" && props.modaleImages ?
            <div className="about-link align-self-end text-center">
              <p onClick={() => setModalShow(true)} style={{'cursor' : 'pointer'}}>voir un exemple</p>
            </div>
            : null
            }
            
            
          </div>
          <div className="about-right col-12 col-md-6">
              {props.nomPresta ? <h3>{props.nomPresta}</h3>:null}
              {props.texte}
          </div>
        </div>
      </div>
      
      
      {props.modale === "on" && props.modaleImages && props.nomPresta ?
      (
        // console.log(props),
      <Modale show={modalShow} onHide={() => setModalShow(false)} modaleimages={props.modaleImages} modalenom={props.nomPresta} size="lg"/>
      )
      : null
      }
      
    </>
  )
}
