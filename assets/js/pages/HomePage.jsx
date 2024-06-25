import React, { Fragment } from 'react'
import Slider from '../../components/Slider'
import Presentation from '../../components/Presentation'

export default function HomePage(props) {
  return (
    <Fragment>
      <Slider name="Slider 1"/>
      <Presentation />
    </Fragment>
  )
}
