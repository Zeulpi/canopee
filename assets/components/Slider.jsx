import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap';

export default function Slider(props) {

    const [sliders, setSliders] = useState([]);
    useEffect(() => {
      function fetchSlider() {
        axios.get('http://localhost:8000/api/sliders', { params: {sliderName: props.name}})
          .then(response => {
            setSliders(response.data["hydra:member"]);
          })
          .catch(error => {
            console.error('Une erreur est survenue :', error);
          });
        }
        fetchSlider();
      }, []);

      let slides = [];
      let descriptions = [];
      const stockImage = () => {
        sliders && sliders.map(slider => (slides = slider.images, descriptions = slider.comments));
        
        // console.log(typeof sliders);
        // slides && console.log(slides[0]);
        // descriptions && console.log(descriptions[0]);
      }
      stockImage();
      
  return (
    <div className='slider w-100'>
        <Carousel className='w100'>
        {slides && slides.map((value, key) => (
            <Carousel.Item interval={5000} key={key}>
                <img key={key} src={"/images/slides/" + value} className="d-block w-100" style={{height: '500px', objectFit: 'cover', objectPosition: 'center'}}/>
                <Carousel.Caption>
                { props.comments === "on" ? <h3>{descriptions && descriptions[key]}</h3> : null}
                </Carousel.Caption>
            </Carousel.Item>
        ))}
        </Carousel>
    </div>
  )
}
