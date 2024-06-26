import React, { Fragment } from 'react'
import Slider from '../../components/Slider'
import Presentation from '../../components/Presentation'
import Team from '../../components/Team'

export default function AboutPage(props) {
  return (
    <Fragment>
      <Presentation />
      <Team />
    </Fragment>
  )
}
