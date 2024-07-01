import React from 'react'
import logo from '../images/logo-canopees.png'
import DesktopHeader from './Header/DesktopHeader'
import MobileHeader from './Header/MobileHeader'
import '../styles/header.css'

export default function Header(props) {
  
    return (
    <nav className="navbar navbar-expand-sm bg-canGreen">
        <div className="container-fluid">
            <div className="menu-logo">
                <img src={logo} alt="logo canopee" className="w-100 menu-logo" />
            </div>
            <DesktopHeader />
            <MobileHeader />
        </div>
      </nav>
  )
}
