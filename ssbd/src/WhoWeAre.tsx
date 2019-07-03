import React from 'react'
import {Typography, Grid} from '@material-ui/core'
import ContentPage from './ContentPage'
import 'react-awesome-slider/dist/styles.css';
import Logo from './images/Logo.jpg'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'
import CentrelessGrind from './images/centrelessGrind.jpg'
import HexagonBar from './images/hexagonBars.jpg'
import BrightDrawing from './images/brightdrawing.jpg'
import {withStyles, Theme, createStyles, WithStyles} from '@material-ui/core/styles'

const styles = (theme: Theme) => createStyles({
  container: {
    display: 'flex',
    color: 'rgba(255,255,255,0.87)',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `linear-gradient(to bottom right, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
    borderRadius: 5,
    height: '100%',
    boxShadow: '5px 5px 20px -12px rgba(0,0,0,0.75)'
  },
  centered: {
    margin:'auto',
    padding: 10
  },
  image: {
    width:'100%',
    height:'100%',
    borderRadius: 5
  },
  highlight: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold'
  }
})

type Props = WithWidth & WithStyles

const WhoWeAre: React.SFC<Props> = ({width, classes}) => {

  const HText: React.SFC<{}> = ({children}) =><span className={classes.highlight}>{children}</span>

  const captions: React.ReactNode[] = [
    <p><HText>SS Bright Drawers (Sheffield) Ltd</HText> was founded in 1984 to provide a manufacturing partnership facility for our customers on a hire work basis.</p>,
    <p>Our core business is <HText>cold bright drawing</HText> of bars (flats, rounds and hexagons).</p>,
    <p>Over the years our range of services offered has grown to include <HText>centreless grinding</HText>, <HText>polishing</HText> and <HText>straightening</HText>.</p>,
    <><p>Our customers’ end users include, but are not restricted, to the following industries:</p>
    <ul><li>Oil and gas</li><li>Nut and bolt</li><li>High tensile</li> <li>Medical</li> <li>Aerospace</li><li>Automotive</li></ul></>,
    <p>We are happy to provide technical advice pertaining to any aspect of <HText>bright drawing</HText> or <HText>surface finishing</HText>.</p>
  ]

  const GridListTextbox: React.SFC<{}> = ({children}) => <Typography variant='h5' align='left' className={classes.container}>
    <div className={classes.centered}>
      {children}
    </div>
  </Typography>

  return(
    <ContentPage title='Who Are We?'>
      <div style={{padding: 24}}>
        <Grid container spacing={16}>
          <Grid item xs={12}><GridListTextbox>{captions[0]}</GridListTextbox></Grid>
          <Grid item xs={12} md={9}><img src={Logo} className={classes.image} alt="SSBD Logo"/></Grid>
          <Grid item xs={12} md={3}><GridListTextbox>{captions[1]}</GridListTextbox></Grid>
          <Grid item xs={12} sm={6} md={4}><img src={CentrelessGrind} className={classes.image} alt="centreless grinding"/></Grid>
          <Grid item xs={12} sm={6} md={4}><GridListTextbox>{captions[2]}</GridListTextbox></Grid>
          {width !== 'sm'?<>
          <Grid item xs={12} sm={7} md={4}><img src={HexagonBar} className={classes.image} alt="hexagon bars"/></Grid>
          <Grid item xs={12} sm={5} md={5}><GridListTextbox>{captions[3]}</GridListTextbox></Grid>
          </> : <>
          <Grid item xs={12} sm={5} md={5}><GridListTextbox>{captions[3]}</GridListTextbox></Grid>
          <Grid item xs={12} sm={7} md={4}><img src={HexagonBar} className={classes.image} alt="hexagon bar"/></Grid>
          </>
          }
          <Grid item xs={12} md={7}><img src={BrightDrawing} className={classes.image} alt="bright drawing"/></Grid>
          <Grid item xs={12}><GridListTextbox>{captions[4]}</GridListTextbox></Grid>
        </Grid>
      </div>
    </ContentPage>
  )
}

export default withWidth()(withStyles(styles)(WhoWeAre))