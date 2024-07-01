import React from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

export default function DesktopHeader() {
  return (
    <div className="menu-links align-items-center d-none d-md-flex">
        <ul className="navbar-nav ml-auto fs-6">
            <NavLinks />
        </ul>
    </div>
  )
}
