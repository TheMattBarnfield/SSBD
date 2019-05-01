import React, { Component } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Grid} from '@material-ui/core'
import Trees from './images/trees.jpg'

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
    'Hexagon bars up to 75mm diameter'
  ],
  image: Trees
}, {
  title: 'Bright Drawing',
  content: [
    'Up to 80mm section size'
  ],
  image: Trees
}, {
  title: 'Centreless Grinding',
  content: [
    'Up to 50mm diameter'
  ],
  image: Trees
}, {
  title: 'Flat and Hexagon Bar Polishing',
  content: [
    'Up to 75mm section size'
  ],
  image: Trees
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
  image: Trees
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
      <img src={image} alt={alt} style={{width:'100%'}}/>

    const makeUnorderedList = (content:string[]) => <ul>
      {content.map(c => <li><Typography>{c}</Typography></li>)}
    </ul>

    const makeExpansionPanel = (process: Process) => <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography variant='h6'>{process.title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container>
          <Grid item xs={12} sm={4}>{makeImage(process.image, process.title)}</Grid>
          <Grid item xs={12} sm={8}>{makeUnorderedList(process.content)}</Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>

    return processes.map(makeExpansionPanel)
  }

}

export default ProcessesList;
