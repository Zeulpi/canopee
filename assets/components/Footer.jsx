import React, { Component } from 'react'
import logo from '../images/logo-canopees.png'

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-canGreen text-center text-canOrange">
        <div className="footer-container row mx-auto w-100 justify-content-center py-1">
          <div className="col-4 d-flex justify-content-center align-items-center"><a href="#">CGU / CGV / Mentions légales</a></div>
            <div className="footer-logo col-3 justify-content-center align-items-center row p-2"><img src={logo} alt="" /></div>
            <div className="col-5 d-flex justify-content-center align-items-center col">
            <p className="col-6" id="footer-adress"></p>
            <div className="col-6">
              <a href=""><i className="fab fa-facebook-f px-2 px-lg-3"></i></a>
              <a href=""><i className="fab fa-instagram px-2 px-lg-3"></i></a>
              <a href="" id="footer-mail"><i className="far fa-envelope px-2 px-lg-3"></i></a>
            </div>
        </div>
      </div>
    </footer>
    )
  }
}