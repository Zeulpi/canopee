import React from 'react'
import { Accordion } from 'react-bootstrap'
import NavLinks from './NavLinks'


export default function MobileHeader() {
  return (
    <div className='d-md-none'>
        <Accordion>
        <Accordion.Item eventKey="0" className='menu-links'>
            <Accordion.Header><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#2a4b9b" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg></Accordion.Header>
            <Accordion.Body className='navbar navbar-default'>
                <ul className='nav navbar-nav d-block'>
                    <NavLinks />
                </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
  )
}
