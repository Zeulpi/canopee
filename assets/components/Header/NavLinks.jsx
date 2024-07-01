import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavLinks extends Component {
  render() {
    return (
      <>
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
      </>
    )
  }
}
