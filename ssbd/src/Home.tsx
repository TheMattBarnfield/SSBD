import React from 'react'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import HomeGridList from './HomeGridList'
import HText from './HText'
import HomepageCarousel from './HomepageCarousel';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles'
import Footer from './Footer'

const styles = ({palette, breakpoints}: Theme) => createStyles({
  slogan: {
    fontStyle: 'italic',
    color: 'white',
    backgroundColor: palette.primary.main,
    padding: '1%',
    gridRowStart: 2,
    gridColumnStart: 1,
    gridColumnEnd: 'span'
  },
  container: {
    [breakpoints.up('lg')]:{
      paddingTop: '3px'
    },
  },
  heading: {
    gridTemplateColumns: '1fr',
    backgroundColor: palette.background.default,
    display: 'grid',
    gridGap: 0,
    gridTemplateRows: 'repeat(3,auto)',
    [breakpoints.up('md')]:{
      gridTemplateColumns: '2fr 1fr',
      gridTemplateRows: 'repeat(2,auto)',
    },
    [breakpoints.up('lg')]:{
      paddingTop: '1%',
      gridGap: '2%',
      gridTemplateColumns: '1fr 4fr 3fr 1fr',
    },
    [breakpoints.up('xl')]:{
      gridTemplateColumns: '2fr 3fr 2fr 2fr',
    }
  },
  carousel: {
    gridColumnStart: 1,
    gridColumnEnd: 'span 2',
    gridRowStart: 1,
    [breakpoints.up('lg')]:{
      gridColumnStart: 2
    }
  },
  intro: {
    padding: '2em',
    gridRowStart: 3,
    gridColumnStart: 1,
    gridColumnEnd: 'span 4',
    [breakpoints.up('md')]:{
      gridRowStart: 1,
      gridColumnStart: 2,
      gridColumnEnd: 'span 1',
      backgroundColor: 'rgba(0,0,0,0.52)',
      color: 'white',
      //backgroundImage: `linear-gradient(to bottom, ${palette.primary.light}, ${palette.primary.main})`,
      zIndex: 999,
      clipPath: 'polygon(15% 0, 100% 0, 100% 101%, 0% 101%)',
      paddingLeft: '15%',
      maxHeight: '100%',
      overflow: 'hidden'
    },
    [breakpoints.up('lg')]:{
      gridColumnStart: 3,
      paddingTop: '5em',
    }
  },
  gridlist: {
    backgroundColor: palette.background.default
  }
})

type Props = WithStyles<typeof styles>

const Home: React.SFC<Props> = ({classes}) => <div className={classes.container}>
  <div className={classes.heading}>
    <HomepageCarousel className={classes.carousel}/>
    <Typography align='center' className={classes.slogan} variant='h6' component='div'>
      Your trusted partner for Bright Drawing, Centreless Grinding and Surface Finishing solutions
    </Typography>
    <Typography align='left' component='div' className={classes.intro}>
      <p><HText>SS Bright Drawers (Sheffield) Ltd</HText> was founded in 1984 to provide a manufacturing partnership facility for our customers on a hire work basis.</p>
      <p>Our core business is <HText>cold bright drawing</HText> of bars (flats, rounds and hexagons).</p>
      <p>Over the years our range of services offered has grown to include <HText>centreless grinding</HText>, <HText>polishing</HText> and <HText>straightening</HText>.</p>
      <p>Our customers’ end users include, but are not restricted to, the following industries:</p>
      <ul>
        <li>Oil and gas</li>
        <li>Nut and bolt</li>
        <li>High tensile</li>
        <li>Medical</li>
        <li>Aerospace</li>
        <li>Automotive</li>
      </ul>
      <p>We are happy to provide technical advice pertaining to any aspect of <HText>bright drawing</HText> or <HText>surface finishing</HText>.</p>
    </Typography>
  </div>
  <div className={classes.gridlist}>
    <Divider variant='middle'/>
    <HomeGridList />
  </div>
  <Footer/>
</div>

export default withStyles(styles)(Home)
