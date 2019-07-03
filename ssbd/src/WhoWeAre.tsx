import React, {CSSProperties} from 'react'
import {Typography, Grid} from '@material-ui/core'
import ContentPage from './ContentPage'
import 'react-awesome-slider/dist/styles.css';
import Logo from './images/Logo.jpg'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'
import CentrelessGrind from './images/centrelessGrind.jpg'
import HexagonBar from './images/hexagonBars.jpg'
import BrightDrawing from './images/brightdrawing.jpg'

const container: CSSProperties = {
  display: 'flex',
  color: 'rgba(255,255,255,0.87)',
  width: '100%',
  backgroundColor: '#4D82AE',
  borderRadius: 5,
  height: '100%',
  boxShadow: '5px 5px 20px -12px rgba(0,0,0,0.75)'
}

const centered: CSSProperties = {
  margin:'auto',
  padding: 10
}

const image: CSSProperties = {
  width:'100%',
  height:'100%',
  borderRadius: 5
}

const highlight: CSSProperties = {
  color: '#0C416E',
  fontWeight: 'bold'
}

const captions: React.ReactNode[] = [
  <p><span style={highlight}>SS Bright Drawers (Sheffield) Ltd</span> was founded in 1984 to provide a manufacturing partnership facility for our customers on a hire work basis.</p>,
  <p>Our core business is <span style={highlight}>cold bright drawing</span> of bars (flats, rounds and hexagons).</p>,
  <p>Over the years our range of services offered has grown to include <span style={highlight}>centreless grinding</span>, <span style={highlight}>polishing</span> and <span style={highlight}>straightening</span>.</p>,
  <><p>Our customers’ end users include, but are not restricted, to the following industries:</p>
  <ul><li>Oil and gas</li><li>Nut and bolt</li><li>High tensile</li> <li>Medical</li> <li>Aerospace</li><li>Automotive</li></ul></>,
  <p>We are happy to provide technical advice pertaining to any aspect of <span style={highlight}>bright drawing</span> or <span style={highlight}>surface finishing</span>.</p>
]

type GLTBProps = {
  children?:React.ReactNode
}

const GridListTextbox: React.SFC<GLTBProps> = (props: GLTBProps) => <Typography variant='h5' align='left' style={container}>
    <div style={centered}>
      {props.children}
    </div>
  </Typography>

const WhoWeAre: React.SFC<WithWidth> = (props: WithWidth) => <ContentPage title='Who Are We?'>
  <div style={{padding: 24}}>
    <Grid container spacing={16}>
      <Grid item xs={12}><GridListTextbox>{captions[0]}</GridListTextbox></Grid>
      <Grid item xs={12} md={9}><img src={Logo} style={image} alt="SSBD Logo"/></Grid>
      <Grid item xs={12} md={3}><GridListTextbox>{captions[1]}</GridListTextbox></Grid>
      <Grid item xs={12} sm={6} md={4}><img src={CentrelessGrind} style={image} alt="centreless grinding"/></Grid>
      <Grid item xs={12} sm={6} md={4}><GridListTextbox>{captions[2]}</GridListTextbox></Grid>
      {props.width !== 'sm'?<>
      <Grid item xs={12} sm={7} md={4}><img src={HexagonBar} style={image} alt="hexagon bars"/></Grid>
      <Grid item xs={12} sm={5} md={5}><GridListTextbox>{captions[3]}</GridListTextbox></Grid>
      </> : <>
      <Grid item xs={12} sm={5} md={5}><GridListTextbox>{captions[3]}</GridListTextbox></Grid>
      <Grid item xs={12} sm={7} md={4}><img src={HexagonBar} style={image} alt="hexagon bar"/></Grid>
      </>
      }
      <Grid item xs={12} md={7}><img src={BrightDrawing} style={image} alt="bright drawing"/></Grid>
      <Grid item xs={12}><GridListTextbox>{captions[4]}</GridListTextbox></Grid>
    </Grid>
  </div>
</ContentPage>

export default withWidth()(WhoWeAre)