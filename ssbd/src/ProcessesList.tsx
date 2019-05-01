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

class ProcessesList extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      open: true
    }
  }
  render() {

    const straightening = {
      title: 'Straightening',
      content: [
        'Round bars up to 52mm diameter',
        'Flat bars up to 170mm x 50mm',
        'Hexagon bars up to 75mm diameter'
      ],
      image: Trees
    }

    const makeImage = (image: string, alt: string) =>
      <img src={image} alt={alt} style={{width:'100%'}}/>

    const makeUnorderedList = (content:string[]) => <ul>
      {content.map(c => <li>{c}</li>)}
    </ul>

    const makeExpansionPanel = (process: Process) => <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant='h6'>{process.title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container>
          <Grid item xs={12} sm={6}>{makeImage(process.image, process.title)}</Grid>
          <Grid item xs={12} sm={6}>{makeUnorderedList(process.content)}</Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>

    return makeExpansionPanel(straightening)
  }

}

export default ProcessesList;
