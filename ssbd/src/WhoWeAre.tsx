import React from 'react'
import ContentPage from './ContentPage'
import Logo from './images/Logo.jpg'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'
import CentrelessGrind from './images/centrelessGrind.jpg'
import HexagonBar from './images/hexagonBars.jpg'
import {withStyles, Theme, createStyles, WithStyles} from '@material-ui/core/styles'
import {CarouselProvider, Slider, Slide, Image} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import HText from './HText'

const styles = (theme: Theme) => createStyles({
  carousel: {
    width:'60%',
    margin: '5% auto',
    [theme.breakpoints.down('sm')]: {
      width:'90%'
    }
  },
  highlight: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold'
  }
})

type Props = WithWidth & WithStyles<typeof styles>

const WhoWeAre: React.SFC<Props> = ({width, classes}) => {
  
  const captions: React.ReactNode[] = [
    <p><HText>SS Bright Drawers (Sheffield) Ltd</HText> was founded in 1984 to provide a manufacturing partnership facility for our customers on a hire work basis.</p>,
    <p>Our core business is <HText>cold bright drawing</HText> of bars (flats, rounds and hexagons).</p>,
    <p>Over the years our range of services offered has grown to include <HText>centreless grinding</HText>, <HText>polishing</HText> and <HText>straightening</HText>.</p>,
    <><p>Our customers’ end users include, but are not restricted, to the following industries:</p>
    <ul><li>Oil and gas</li><li>Nut and bolt</li><li>High tensile</li> <li>Medical</li> <li>Aerospace</li><li>Automotive</li></ul></>,
    <p>We are happy to provide technical advice pertaining to any aspect of <HText>bright drawing</HText> or <HText>surface finishing</HText>.</p>
  ]

  return(
    <ContentPage title='Who Are We?'>
      <CarouselProvider
        naturalSlideWidth={10}
        naturalSlideHeight={5}
        totalSlides={3}
        isPlaying
        interval={5000}
        className={classes.carousel}
      >
        <Slider style={{borderRadius: 5}}>
          <Slide index={0}><Image src={Logo} hasMasterSpinner={false}/></Slide>
          <Slide index={1}><Image src={CentrelessGrind} hasMasterSpinner={false}/></Slide>
          <Slide index={2}><Image src={HexagonBar} hasMasterSpinner={false}/></Slide>
        </Slider>
      </CarouselProvider>
      {captions}
    </ContentPage>
  )
}

export default withWidth()(withStyles(styles)(WhoWeAre))