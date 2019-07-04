import React, { Component } from 'react'
import {Typography, Grid, MenuItem, TextField} from '@material-ui/core'
import CentrelessGrind from './images/centrelessGrind.jpg'
import HexagonBar from './images/hexagonBars.jpg'
import Straightening from './images/straightening.jpg'
import BrightDrawing from './images/brightdrawing.jpg'
import ShotBlasting from './images/shotblasting.jpg'
import {withStyles, Theme, createStyles, WithStyles} from '@material-ui/core/styles'

interface State {
  selected: string
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

const styles = (theme: Theme) => createStyles({
  select: {
    width:'30em',
    maxWidth:'80%',
    [theme.breakpoints.down('sm')]:{
      maxWidth:'100%'
    }
  }
})

type Props = WithStyles<typeof styles>

class ProcessesList extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      selected: processes[0].title
    }
  }

  render() {

    const makeImage = (image: string, alt: string) =>
      <img src={image} alt={alt} style={{width:'100%', borderRadius:5}}/>

    const makeUnorderedList = (content:string[]) => <ul>
      {content.map(c => <li key={c}><Typography>{c}</Typography></li>)}
    </ul>

    const select = <TextField
      select
      value={this.state.selected}
      label='Process'
      onChange={(event)=>this.setState({selected: event.target.value})}
      variant='outlined'
      className={this.props.classes.select}
    >
      {processes.map(({title}) => <MenuItem value={title} key={title}>{title}</MenuItem>)}
    </TextField>

    const process = processes.find((p) => p.title === this.state.selected) || processes[0]

    return <div style={{padding:24}}>
      <Grid container spacing={24}>
        <Grid item xs={12} style={{textAlign:'center'}}>{select}</Grid>
        <Grid item xs={12} sm={7}>{makeUnorderedList(process.content)}</Grid>
        <Grid item xs={12} sm={5}>{makeImage(process.image, process.title)}</Grid>
      </Grid>
    </div>
  }

}

export default withStyles(styles)(ProcessesList);
