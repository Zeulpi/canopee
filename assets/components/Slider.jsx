import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap';

export default function Slider(props) {

    const [sliders, setSliders] = useState([]);
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    useEffect(() => {
        axios.get('http://localhost:8000/api/sliders', { params: {sliderName: props.name}})
          .then(response => {
            setSliders(response.data["hydra:member"]);
          })
          .catch(error => {
            console.error('Une erreur est survenue :', error);
          });
      }, []);

      let slides = [];
      sliders.map(slider => (slides = slider.images));
      console.log(slides);

  return (
    <div className='w-100'>
        <Carousel className='w100'>
        {slides.map((value, key) => (
            <Carousel.Item interval={5000} key={key}>
                <img key={key} src={"/images/slides/" + value} className="d-block w-100" style={{height: '500px', objectFit: 'cover', objectPosition: 'center'}}/>
                <Carousel.Caption>
                <h3>Slide number {key +1}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
        </Carousel>
    </div>
  )
}
