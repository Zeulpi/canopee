import React from 'react'
import logo from '../images/logo-canopees.png'
import authAPI from '../js/services/authAPI'

export default function Header(props) {
  
//   const handleLogout = () => {
//     authAPI.logout();
//   }
    return (
    <nav className="navbar navbar-expand-sm bg-canGreen">
        <div className="container-fluid">
            <div className="menu-logo">
            <img src={logo} alt="logo canopee" className="w-100 menu-logo" />
            </div>
            <div className="menu-links d-flex align-items-center">
            <ul className="navbar-nav ml-auto fs-6">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Qui sommes-nous ?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Prestations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tarifs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    {/* <li className="nav-item">
                        <button onClick={handleLogout} className='btn btn-danger'>Deconnection</button>
                    </li> */}
                </ul>
            </div>
        </div>
      </nav>
  )
}
