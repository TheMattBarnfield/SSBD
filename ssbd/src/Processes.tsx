import React, { Component } from 'react'
import ProcessesList from './ProcessesList';
import ContentPage from './ContentPage';
import { Typography, Grid } from '@material-ui/core';
import ColdDrawn from './images/coldDrawn.jpg'

const Processes: React.SFC<{}> = props => {
  const preamble = 
    <Typography>SS Bright Drawers process material for High Pressure Manifolds for the oil and gas industry as well as material to be used in the medical, fasteners, catering, automotive, aerospace, nuclear, high tensile, nautical and rail applications.</Typography>

  const image = <img src={ColdDrawn} alt='Processes' style={{width:'100%'}}/>

  return <ContentPage title='Products and Processes'>
    <div style={{padding:12}}>
      <Grid container spacing={24}>
        <Grid container alignContent='flex-start' xs={12} md={5} spacing={8}>
          <Grid item xs={12} sm={6} md={12} style={{padding:24}}>{preamble}</Grid>
          <Grid item xs={12} sm={6} md={12} style={{padding:24}}>{image}</Grid>
        </Grid>
        <Grid item xs={12} md={7}><ProcessesList/></Grid>
      </Grid>
    </div>
  </ContentPage>
}
export default Processes;
