import React, { useState, useEffect } from 'react'
import requetesAPI from '../js/services/requetesAPI';


export default function Plan() {
    const [entr, setEntr] = useState({});
    
    const getCompany = async() => {
      try {
        const data = await requetesAPI.findOne('entreprises', 1)
        setEntr(data);
      }
      catch (error) {
        console.error('Une erreur est survenue :', error);
      };
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
