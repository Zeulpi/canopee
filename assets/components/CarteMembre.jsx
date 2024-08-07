import React from 'react'
import Card from 'react-bootstrap/Card';
import parse from 'html-react-parser';

export default function CarteMembre(props) {
  return (
    <div className='col-6 col-md-5 justify-content-center d-flex'>
      <Card style={{ width: '18rem' }} className='team-cadre'>
        <Card.Img variant="top" src={"/images/avatar/" + props.membre.image} />
        <Card.Body>
            <Card.Title>{props.membre.firstName}</Card.Title>
            <Card.Text as='div'>
              {parse(props.membre.bio)}
            </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
