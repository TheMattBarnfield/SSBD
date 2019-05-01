import React, { Component } from 'react'
import {Typography} from '@material-ui/core';
import ContentPage from './ContentPage';

interface Props {

}

interface State {

}

class Processes extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return <ContentPage title='Who We Are'>
      <Typography>SS Bright Drawers (Sheffield) Ltd was founded in 1984 to provide a manufacturing partnership facility for our customers on a hire work basis.</Typography>
      <Typography>Our core business is cold bright drawing of bar (flats, rounds and hexagons).</Typography>
      <Typography>Over the years our range of services offered has grown to include centreless grinding, polishing and straightening.</Typography>
      <Typography>Our customers’ end users include, but are not restricted to, the oil and gas, nut and bolt, high tensile, medical, aerospace and automotive industries.</Typography>
      <Typography>We are happy to provide technical advice pertaining to any aspect of bright drawing or surface finishing.</Typography>
    </ContentPage>
  }

}

export default Processes;
