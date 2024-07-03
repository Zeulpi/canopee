import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap';
import requetesAPI from '../js/services/requetesAPI';

export default function Slider(props) {

  const [sliders, setSliders] = useState([]);
  
  const getSlider = async () => {
    try {
      const data = await requetesAPI.findSlider( props.name )
      setSliders(data);
    }
    catch (error) {
        console.error('Une erreur est survenue :', error);
    };
  }
    useEffect(() => {
      getSlider()
  }, [])

  let slides = [];
  let descriptions = [];
  const stockImage = () => {
    sliders.map((slider, key) => (
      slides = slider.images,
      descriptions = slider.comments
    ));
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
