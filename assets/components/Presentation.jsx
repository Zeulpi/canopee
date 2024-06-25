import React from 'react'
import logo from '../images/logo-canopees.png'

export default function Presentation(props) {
  return (
    <div className='text-canBlue'>
      <h1 className="text-center">Canopees, c'est quoi ?</h1>
      <div className="about row mx-auto">
        <div className="about-left col-12 col-md-6 p-2 d-flex align-items-center">
          <img
            src={logo}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="about-right col-12 col-md-6">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga animi
            nemo iste laboriosam corrupti incidunt reiciendis fugiat. Quisquam
            vero fugit accusantium eligendi tenetur dolore culpa illum,
            doloribus perspiciatis provident amet.
          </p>
          <p><ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul></p>
        </div>
      </div>
    </div>
  )
}
