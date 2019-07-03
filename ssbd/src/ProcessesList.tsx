import React, { Component } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Grid} from '@material-ui/core'
import CentrelessGrind from './images/centrelessGrind.jpg'
import HexagonBar from './images/hexagonBars.jpg'
import Straightening from './images/straightening.jpg'
import BrightDrawing from './images/brightdrawing.jpg'
import ShotBlasting from './images/shotblasting.jpg'

interface State {
  open: boolean
}

interface Process {
  title: string,
  content: string[],
  image: string
}

const processes: Process[] = [{
  title: 'Straightening',
  content: [
    'Round bars up to 52mm diameter',
    'Flat bars up to 170mm x 50mm',
    'Hexagon bars up to 75mm AF',
    'Square bars up to 75mm x 75mm'
  ],
  image: Straightening
}, {
  title: 'Bright Drawing',
  content: [
    'Up to 80mm section size'
  ],
  image: BrightDrawing
}, {
  title: 'Centreless Grinding',
  content: [
    'Up to 50mm diameter'
  ],
  image: CentrelessGrind
}, {
  title: 'Flat and Hexagon Bar Polishing',
  content: [
    '5mm to 125mm section size'
  ],
  image: HexagonBar
}, {
  title: 'Non-destructive Testing',
  content: [
    'Dye penetrant',
    'Ultrasonic'
  ],
  image: HexagonBar
}, {
  title: 'Destructive Testing',
  content: [
    'Corrosion',
    'Intercrystalline Corrosion',
    'Tensile',
    'Izod'
  ],
  image: HexagonBar
}, {
  title: 'Other Processes',
  content: [
    'Shot blasting',
	  'Bead blasting',
	  'Roll marking',
	  'Bar chamfering',
    'Stainless Steel bar cleaning (acid)',
    'Further processes may be available upon request'
  ],
  image: ShotBlasting
},
]

class ProcessesList extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      open: true
    }
  }
  render() {
    const makeImage = (image: string, alt: string) =>
      <img src={image} alt={alt} style={{width:'100%', borderRadius:5}}/>

    const makeUnorderedList = (content:string[]) => <ul>
      {content.map(c => <li><Typography>{c}</Typography></li>)}
    </ul>

    const makeExpansionPanel = (process: Process) => <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography variant='h6' color='primary'>{process.title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container>
          <Grid item xs={12} sm={5}>{makeImage(process.image, process.title)}</Grid>
          <Grid item xs={12} sm={7}>{makeUnorderedList(process.content)}</Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>

    return processes.map(makeExpansionPanel)
  }

}

export default ProcessesList;
