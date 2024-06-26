import React from 'react'
import logo from '../images/logo-canopees.png'
import { Link } from 'react-router-dom'

export default function Header(props) {
  
    return (
    <nav className="navbar navbar-expand-sm bg-canGreen">
        <div className="container-fluid">
            <div className="menu-logo">
            <img src={logo} alt="logo canopee" className="w-100 menu-logo" />
            </div>
            <div className="menu-links d-flex align-items-center">
            <ul className="navbar-nav ml-auto fs-6">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">Qui sommes-nous ?</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/prestas" className="nav-link">Prestations</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tarifs" className="nav-link">Tarifs</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
  )
}
