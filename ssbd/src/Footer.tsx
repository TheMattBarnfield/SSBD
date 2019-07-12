import React from 'react'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles'
import SocialMediaLinks from './SocialMediaLinks';
import { Typography } from '@material-ui/core';
import HText from './HText'

const styles = ({palette, breakpoints}: Theme) => createStyles({
  container: {
    color: 'white',
    backgroundColor: palette.primary.dark,
    padding: '2em',
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: 'auto',
    gridRowGap: '2em',
    [breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr auto 1fr'
    }
  },
  address: {
    gridRowStart: 2,
    color: 'inherit',
    [breakpoints.up('sm')]: {
      gridRowStart:1
    }
  },
  socialMedia: {
    gridRowStart: 1,
    [breakpoints.up('sm')]: {
      gridColumnStart:3,
      justifySelf: 'end'
    }
  }
})

const Footer: React.SFC<WithStyles<typeof styles>> = ({classes}) => <div className={classes.container}>
  <div className={classes.address}>
    <Typography style={{color: 'inherit'}}> 
      <HText>SS Bright Drawers (Sheffield) Ltd,</HText> <br></br>
      Worthing Road, <br></br>
      Sheffield. <br></br>
      S9 3JB.
    </Typography>
    <Typography style={{color: 'inherit'}}>Phone: <HText>01234 567890</HText></Typography>
    <Typography style={{color: 'inherit'}}>Email: <HText>email@ssbrightdrawers.co.uk</HText></Typography>
  </div>
  <SocialMediaLinks className={classes.socialMedia}/>
</div>

export default withStyles(styles)(Footer)