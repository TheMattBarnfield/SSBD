import React, { Component } from 'react'
import { Card, CardHeader, CardContent } from '@material-ui/core';

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
    return <Card style={{margin: 24}}>
      <CardHeader title='Who We Are'/>
      <CardContent>
        <p>SS Bright Drawers (Sheffield) Ltd was founded in 1984 to provide a manufacturing partnership facility for our customers on a hire work basis.</p>
        <p>Our core business is cold bright drawing of bar (flats, rounds and hexagons).</p>
        <p>Over the years our range of services offered has grown to include centreless grinding, polishing and straightening.</p>
        <p>Our customers’ end users include, but are not restricted to, the oil and gas, nut and bolt, high tensile, medical, aerospace and automotive industries.</p>
        <p>We are happy to provide technical advice pertaining to any aspect of bright drawing or surface finishing.</p>
      </CardContent>
    </Card>
  }

}

export default Processes;
