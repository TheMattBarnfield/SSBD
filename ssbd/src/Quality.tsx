import React, { Component } from 'react'
import { Card, CardHeader, CardContent, Grid, GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import BSI from './images/bsi logo.jpg'
import BSSA from './images/BSSA logo.jpg'
import ISO from './images/ISO logo.gif'
import CloudDownload from '@material-ui/icons/CloudDownload'
import ContentPage from './ContentPage';
import withWidth, { WithWidth } from '@material-ui/core/withWidth';

interface Certificate {
  name: string,
  logo: string,
  file: string
}

const certificates: Certificate[] = [{
  name: 'BSI',
  logo: BSI,
  file: 'BSI'
}, {
  name: 'ISO 9001:2015',
  logo: ISO,
  file: 'ISO'
}, {
  name: 'BSSA',
  logo: BSSA,
  file: 'bssa'
}]

const columns = {
  'xl': 3,
  'lg': 3,
  'md': 3,
  'sm': 2,
  'xs': 1
}

const Quality: React.SFC<WithWidth> = (props: WithWidth) => {
    const makeGridListTile = (certificate: Certificate) => <GridListTile key={certificate.name}>
      <a href={`./certificates/${certificate.file}.pdf`} download>
        <img src={certificate.logo} alt={certificate.name} style={{width:'100%', height:'100%'}}/>
        <GridListTileBar 
          title={certificate.name}
          actionIcon={
            <IconButton>
              <CloudDownload style={{color: 'rgba(255,255,255,0.54'}}/>
            </IconButton>
          }
        />
      </a>
    </GridListTile>
    
    const certificateGridList = <GridList cols={columns[props.width]} spacing={20} style={{margin: 20}}>
      {certificates.map(makeGridListTile)}
    </GridList>

    const qualityCard = <Card>
      <CardHeader title='Accreditation'/>
      <CardContent>
        <p>SS Bright Drawers operate a Quality Management System in compliance with ISO 9001:2015. Please download our accreditation certificate here if required.</p>
        {certificateGridList}
      </CardContent>
    </Card>

    const tolerancesCard = <Card>
      <CardHeader title='Size Tolerances'/>
      <CardContent>
        <p>Our standard grinding tolerances are H9/K9.</p>
        <p>Our standard drawing tolerances are H11/K11.</p>
        <p>We can offer tighter tolerances <Link to='/contact-us'>on request</Link>.</p>
      </CardContent>
    </Card>

    const standardsCard = <Card>
      <CardHeader title='Standards'/>
      <CardContent>
        <p>
          SS Bright Drawers produce materials which comply with internationally recognised standards in the various industries we supply to.
          For North Sea Oil and Gas, we are producing material to NORSOK approved suppliers.
          Within the Fasteners industry we supply to <a href='./certificates/fastener grades.pdf' download>BSI standards</a>.
          For medical implant applications we supply to customer defined specifications.
          We will be happy to discuss your specification requirements <Link to='/contact-us'>on request</Link>.</p>
      </CardContent>
    </Card>

    return <ContentPage title='Quality'>
      <Grid container spacing={24}>
        <Grid item xs={12}>{qualityCard}</Grid>
        <Grid item xs={12} lg={6}>{tolerancesCard}</Grid>
        <Grid item xs={12} lg={6}>{standardsCard}</Grid>
      </Grid>
    </ContentPage>

}

export default withWidth()(Quality);