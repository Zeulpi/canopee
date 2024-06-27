import React, { useState, useEffect } from 'react'
import Field from '../../components/Form/Field'
import axios from 'axios';
import FieldArea from '../../components/Form/FieldArea';
import Titre from '../../components/Titre';
import Modale from '../../components/Modale';
import Plan from '../../components/Plan';


export default function Contact() {
  const [modalShow, setModalShow] = useState(false);
  const initialState = {
    firstName:"",
    lastName:"",
    email:"",
    tel:"",
    adresse:"",
    ville:"",
    zip:"",
    texteMessage:""
  }
  const [message, setMessage] = useState({
    firstName:"",
    lastName:"",
    email:"",
    tel:"",
    adresse:"",
    ville:"",
    zip:"",
    texteMessage:""
  });
  const [errors, setErrors] = useState({
    firstName:"",
    lastName:"",
    email:"",
    tel:"",
    adresse:"",
    ville:"",
    zip:"",
    texteMessage:""
  });
  
  const sendMessage = async () => {
    await axios.post('http://localhost:8000/api/messages', message)
    .then(response => {
      response.status === 201 ? setModalShow(true) : null
      }
    )
    .catch(error => {
        console.error('Une erreur est survenue :', error);
    });
}

  const handleChange = ({currentTarget}) => {
    const {name, value} = currentTarget;
    setMessage({...message, [name]:value});
  }
  const handleSubmit = async event => {
    event.preventDefault();
    sendMessage();
    setMessage({...initialState})
    }

  return (
    <>
      <Titre titre="Contactez nous / Demandez un devis"/>
      <form onSubmit={handleSubmit} className='d-flex row justify-content-between text-canBlue'>
        <Field label="Nom" name="firstName" onChange={handleChange} error={errors.firstName} value={message.firstName}/>
        <Field label="Prénom" name="lastName" onChange={handleChange} value={message.lastName}/>
        <Field label="Mail" name="email" onChange={handleChange} type="email" value={message.email}/>
        <Field label="Telephone" name="tel" onChange={handleChange} value={message.tel}/>
        <Field label="Adresse" name="adresse" onChange={handleChange} value={message.adresse}/>
        <Field label="Code postal" name="zip" onChange={handleChange} value={message.zip}/>
        <Field label="Ville" name="ville" onChange={handleChange} value={message.ville}/>
        <FieldArea label="Votre Message :" name="texteMessage" onChange={handleChange} value={message.texteMessage}/>
        <div className='form-group pt-2 d-flex justify-content-end'>
          <button type='submit' className='btn btn-success' >Envoyer</button>
        </div>
      </form>
      <Modale show={modalShow} onHide={() => setModalShow(false)} modalenom="Votre message a été envoyé" size="sm"/>
      <Titre titre="Ou sommes nous ?" pt="3"/>
      <Plan />
    </>
  )
}
