import React, { Fragment } from 'react'
import Slider from '../../components/Slider'
import Presentation from '../../components/Presentation'

export default function AboutPage(props) {
  return (
    <Fragment>
      <h1>Ceci est la page Qui sommes nous</h1>
      <Slider name="Slider 1"/>
      <Presentation />
    </Fragment>
  )
}
