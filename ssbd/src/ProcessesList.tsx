import React, { Component } from 'react'
import {Typography, MenuItem, TextField} from '@material-ui/core'
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

const styles = ({breakpoints}: Theme) => createStyles({
  select: {
    gridColumnStart: 1,
    gridRowStart: 2,
    gridColumnEnd: 'span',
    [breakpoints.up('sm')]: {
      gridColumnStart: 2,
      gridColumnEnd: 'span 1',
    }
  },
  container: {
    padding: '1em',
    display: 'grid',
    gridTemplateRows: 'repeat(3, auto)',
    gridTemplateColumns: '1fr 3fr 1fr',
    gridGap: '0.5em',
    [breakpoints.up('sm')]: {
      paddingTop: 0
    }
  },
  process: {
    gridColumnStart: 1,
    gridColumnEnd: 'span',
    gridRowStart: 3
  },
  heading: {
    gridColumnStart: 1,
    gridRowStart: 1,
    gridColumnEnd: 'span'
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
    const classes = this.props.classes
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

    return <div className={classes.container}>
      <Typography color='primary' variant='h4' component='h2' className={classes.heading} gutterBottom>What We Offer</Typography>
      {select}
      <div className={classes.process}>{makeUnorderedList(process.content)}</div>
    </div>
  }

}

export default withStyles(styles)(ProcessesList);
