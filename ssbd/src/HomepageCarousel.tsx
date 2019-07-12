import React, {CSSProperties} from 'react'
import CentrelessGrind from './images/centrelessGrind.jpg'
import HexagonBar from './images/hexagonBars.jpg'
import Factory from './images/factory-carousel.jpg'
import {withStyles, Theme, createStyles, WithStyles} from '@material-ui/core/styles'
import {CarouselProvider, Slider, Slide, Image} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';

const styles = (theme: Theme) => createStyles({
  carousel: {
    width: '100%',
    borderRadius: 'inherit'
  }
})

type Props = {
  style?: CSSProperties,
  className?: any
} & WithStyles<typeof styles>

const HomepageCarousel: React.SFC<Props> = ({className, style, classes}) => 
  <div className={className} style={style}>
    <CarouselProvider
      naturalSlideWidth={500}
      naturalSlideHeight={333}
      totalSlides={3}
      isPlaying
      interval={5000}
      className={classes.carousel}
      >
      <Slider style={{borderRadius: 'inherit'}}>
        <Slide index={0}><Image src={Factory} hasMasterSpinner={false}/></Slide>
        <Slide index={1}><Image src={CentrelessGrind} hasMasterSpinner={false}/></Slide>
        <Slide index={2}><Image src={HexagonBar} hasMasterSpinner={false}/></Slide>
      </Slider>
    </CarouselProvider>
  </div>

export default withStyles(styles)(HomepageCarousel)