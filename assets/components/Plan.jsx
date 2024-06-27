import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function Plan() {
    const [entr, setEntr] = useState({});
    
        function getCompany() {
            const req = axios.get('http://localhost:8000/api/entreprises/1')
          .then(response => {
            setEntr(response.data);
          })
          .catch(error => {
            console.error('Une erreur est survenue :', error);
          });
          }
          useEffect(() => {
            getCompany();
            }, [])
      
  return (
    <>
        <div className='d-flex row justify-content-between text-canBlue'>
            <div className='d-flex row justify-content-between text-canBlue py-3'>
                <div className='col-6'><span className='fw-medium'>email : </span>{entr.email}</div>
                <div className='col-6'><span className='fw-medium'>tel : </span>{entr.tel}</div>
                <div className='col-6'><span className='fw-medium'>adresse : </span>{entr.adresse}</div>
            </div>
            <div className='py-3'>
                <img src={"images/infos/"+entr.plan} alt="" className='w-100 border border-2'/>
            </div>
        </div>
    </>
  )
}
