import React from 'react'
import ProcessesList from './ProcessesList'
import ContentPage from './ContentPage'
import { Typography, Grid } from '@material-ui/core'
import {withStyles, Theme, createStyles, WithStyles} from '@material-ui/core/styles'

const styles = (theme: Theme) => createStyles({
  intro:{
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    [theme.breakpoints.up('md')]:{
      borderBottom: 'none',
      borderRight:'1px solid rgba(0,0,0,0.1)'
    }
  }
})

type Props = WithStyles<typeof styles>

const Processes: React.SFC<Props> = props => {
  const preamble = 
    <Typography component='div'>
      SS Bright Drawers process material for High Pressure Manifolds for the oil and gas industry, as well as material to be used for
      <ul>
        <li>medical,</li>
        <li>fasteners,</li>
        <li>catering,</li>
        <li>automotive,</li>
        <li>aerospace,</li>
        <li>nuclear,</li>
        <li>high tensile,</li>
        <li>nautical,</li>
        <li>and rail applications.</li>
      </ul>
    </Typography>

  return <ContentPage title='Products and Processes'>
    <div style={{padding:'2%'}}>
      <Grid container spacing={24}>
        <Grid item xs={12} md={5} className={props.classes.intro}>
          {preamble}
        </Grid>
        <Grid item xs={12} md={7}><ProcessesList/></Grid>
      </Grid>
    </div>
  </ContentPage>
}
export default withStyles(styles)(Processes);
