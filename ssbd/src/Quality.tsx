import React from 'react'
import { Typography} from '@material-ui/core';
import { Link } from 'react-router-dom'
import ContentPage from './ContentPage';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles'
import CertificateGridList from './CertificateGridList'

const styles = ({breakpoints}: Theme) => createStyles({
  container: {
    display: 'grid',
    gridTemplateRows: 'repeat(3, auto)',
    [breakpoints.up('lg')]: {
      gridTemplateRows: 'repeat(2, auto)',
      gridTemplateColumns: '2fr 2fr 3fr'
    }
  },
  accreditation: {
    padding: '1em',
    [breakpoints.up('lg')]: {
      gridColumnEnd: 'span 4',
      gridRowStart: 1,
      gridColumnStart: 3
    }
  },
  standards: {
    padding: '1em',
    [breakpoints.up('lg')]: {
      gridColumnStart: 2,
      borderRight: '1px solid rgba(0,0,0,0.1)'
    }
  },
  tolerances: {
    padding: '1em',
    [breakpoints.up('lg')]: {
      gridRowStart: 1,
      gridColumnStart: 1,
      borderRight: '1px solid rgba(0,0,0,0.1)'
    }
  }
})

const Quality: React.SFC<WithStyles<typeof styles>> = ({classes}) => {

  const accreditation = <div className={classes.accreditation}>
    <Typography variant='h4' component='h2' color='primary' gutterBottom>Accreditation</Typography>
    <Typography>SS Bright Drawers operate a Quality Management System in compliance with ISO 9001:2015. Please download our accreditation certificate here if required.</Typography>
    <CertificateGridList/>
  </div>

  const tolerancesText = <Typography component='span'>
    <ul>
      <li>Our standard grinding tolerances are H9/K9.</li>
      <li>Our standard drawing tolerances are H11/K11.</li>
      <li>We can offer tighter tolerances <Link to='/contact-us'>on request</Link>.</li>
    </ul>
  </Typography>

  const tolerances = <div className={classes.tolerances}>
    <Typography variant='h4' component='h2' color='primary'>Size Tolerances</Typography>
    {tolerancesText}
  </div>

  const standardsText = <Typography component='span'>
    SS Bright Drawers produce materials which comply with internationally recognised standards in the various industries we supply to.
    <ul>
      <li>For North Sea Oil and Gas, we are producing material to NORSOK approved suppliers.</li>
      <li>Within the Fasteners industry we supply to <a href='./certificates/fastener grades.pdf' download>BSI standards</a>.</li>
      <li>For medical implant applications we supply to customer defined specifications.</li>
      <li>We are happy to discuss your specification requirements <Link to='/contact-us'>on request</Link>.</li>
    </ul>
  </Typography>

  const standards = <div className={classes.standards}>
    <Typography variant='h4' component='h2' color='primary' gutterBottom>Standards</Typography>
    {standardsText}
  </div>

  return <ContentPage title='Quality'>
    <div className={classes.container}>
      {standards}
      {tolerances}
      {accreditation}
    </div>
  </ContentPage>

}

export default withStyles(styles)(Quality);