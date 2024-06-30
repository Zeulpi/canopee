import React, { Fragment } from 'react'
import Slider from '../../components/Slider'
import Presentation from '../../components/Presentation'
import Publics from '../../components/Publics'

export default function HomePage(props) {
  return (
    <Fragment>
      <Slider name="Slider 1"/>
      <Presentation />
      <Publics />
      <Slider name="Dernieres reals" comments="on"/>
    </Fragment>
  )
}
