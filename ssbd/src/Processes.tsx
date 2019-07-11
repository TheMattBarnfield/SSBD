import React from 'react'
import ProcessesList from './ProcessesList';
import ContentPage from './ContentPage';
import { Typography, Grid, Divider } from '@material-ui/core';
import ColdDrawn from './images/coldDrawn.jpg'
import {withStyles, Theme, createStyles, WithStyles} from '@material-ui/core/styles'
import withWidth, { WithWidth, isWidthDown } from '@material-ui/core/withWidth'

const styles = (theme: Theme) => createStyles({
  intro:{
    [theme.breakpoints.up('md')]:{
      borderRight:'1px solid rgba(0,0,0,0.1)'
    }
  }
})

type Props = WithWidth & WithStyles<typeof styles>

const Processes: React.SFC<Props> = props => {
  const preamble = 
    <Typography>SS Bright Drawers process material for High Pressure Manifolds for the oil and gas industry as well as material to be used in the medical, fasteners, catering, automotive, aerospace, nuclear, high tensile, nautical and rail applications.</Typography>

  const image = <img src={ColdDrawn} alt='Processes' style={{width:'100%', borderRadius:5}}/>

  return <ContentPage title='Products and Processes'>
    <div style={{padding:'2%'}}>
      <Grid container spacing={24}>
        <Grid container item alignContent='flex-start' xs={12} md={5} spacing={8} className={props.classes.intro}>
          <Grid item xs={12} sm={6} md={12} style={{padding:'2%'}}>{preamble}</Grid>
          <Grid item xs={12} sm={6} md={12} style={{padding:'2%'}}>{image}</Grid>
        </Grid>
        {isWidthDown('sm', props.width) ? <Grid item xs={12}><Divider /></Grid> : null}
        <Grid item xs={12} md={7}><ProcessesList/></Grid>
      </Grid>
    </div>
  </ContentPage>
}
export default withWidth()(withStyles(styles)(Processes));
