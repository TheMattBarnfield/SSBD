import React from 'react'
import { Typography, Card, CardHeader, CardContent, Grid, GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import BSI from './images/bsi logo.jpg'
import BSSA from './images/BSSA logo.jpg'
import ISO from './images/ISO logo.gif'
import CloudDownload from '@material-ui/icons/CloudDownload'
import ContentPage from './ContentPage';
import withWidth, { WithWidth } from '@material-ui/core/withWidth'
import DrawingUnit from './images/drawingunit.jpg'
import Straightness from './images/straightness.jpg'
interface Certificate {
  name: string,
  logo: string,
  link: string,
  download?: boolean
}

const certificateLink = (file: string): string => `./certificates/${file}.pdf`

const certificates: Certificate[] = [{
  name: 'BSI',
  logo: BSI,
  link: certificateLink('BSI'),
  download: true
}, {
  name: 'ISO 9001:2015',
  logo: ISO,
  link: certificateLink('ISO'),
  download: true
}, {
  name: 'BSSA',
  logo: BSSA,
  link: 'https://www.bssa.org.uk/'
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
    <a href={certificate.link} download={certificate.download} target='_blank' rel="noopener noreferrer">
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
    <CardHeader title='Accreditation' titleTypographyProps={{color:'primary'}}/>
    <CardContent>
      <Typography>SS Bright Drawers operate a Quality Management System in compliance with ISO 9001:2015. Please download our accreditation certificate here if required.</Typography>
      {certificateGridList}
    </CardContent>
  </Card>

  const tolerancesText = <Typography component='span'>
    <ul>
      <li>Our standard grinding tolerances are H9/K9.</li>
      <li>Our standard drawing tolerances are H11/K11.</li>
      <li>We can offer tighter tolerances <Link to='/contact-us'>on request</Link>.</li>
    </ul>
  </Typography>

  const tolerancesImage = <img src={DrawingUnit} alt='Drawing Unit' style={{width:'100%', borderRadius:5}}/>

  const tolerancesCard = <Card style={{minHeight:'100%'}}>
    <CardHeader title='Size Tolerances' titleTypographyProps={{color:'primary'}}/>
    <CardContent style={{padding:24}}>
      <Grid container spacing={24}>
        <Grid xs={12} sm={6} md={12} item>{tolerancesText}</Grid>
        <Grid xs={12} sm={6} md={12} item>{tolerancesImage}</Grid>
      </Grid>
    </CardContent>
  </Card>

  const standardsText = <Typography>
    SS Bright Drawers produce materials which comply with internationally recognised standards in the various industries we supply to.
    For North Sea Oil and Gas, we are producing material to NORSOK approved suppliers.
    Within the Fasteners industry we supply to <a href='./certificates/fastener grades.pdf' download>BSI standards</a>.
    For medical implant applications we supply to customer defined specifications.
    We will be happy to discuss your specification requirements <Link to='/contact-us'>on request</Link>.
  </Typography>

  const standardsImage = <img src={Straightness} alt='Measuring straightness' style={{width:'100%', borderRadius:5}}/>

  const standardsCard = <Card style={{minHeight:'100%'}}>
    <CardHeader title='Standards' titleTypographyProps={{color:'primary'}}/>
    <CardContent style={{padding:24}}>
    <Grid container spacing={24}>
        <Grid xs={12} sm={6} md={12} item>{standardsImage}</Grid>
        <Grid xs={12} sm={6} md={12} item>{standardsText}</Grid>
      </Grid>
    </CardContent>
  </Card>

  return <ContentPage title='Quality'>
    <Grid container spacing={24}>
      <Grid item xs={12}>{qualityCard}</Grid>
      <Grid container spacing={24} alignItems='stretch' style={{padding:12}}>
        <Grid item xs={12} md={6}>{tolerancesCard}</Grid>
        <Grid item xs={12} md={6}>{standardsCard}</Grid>
      </Grid>
    </Grid>
  </ContentPage>

}

export default withWidth()(Quality);