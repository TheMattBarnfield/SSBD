import React from 'react'
import Contact from '@material-ui/icons/ContactSupport'
import Facebook from './images/facebook logo.png'
import LinkedIn from './images/linkedin logo.png'
import Tooltip from '@material-ui/core/Tooltip'
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import {Typography} from '@material-ui/core'
import withWidth, { WithWidth, isWidthUp } from '@material-ui/core/withWidth'
import {withStyles, Theme, createStyles, WithStyles} from '@material-ui/core/styles'

const styles = ({breakpoints}: Theme) => createStyles({
  imageStyle: {
    height: '1em',
    width: '1em'
  },
  container: {
    height: '100%',
    display:'flex'
  },
  centered: {
    margin: 'auto',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [breakpoints.up('sm')]: {
      border: '1px solid white',
      borderRadius: '5px'
    }
  }
})

type Props = WithWidth & WithStyles<typeof styles>

const SocialMediaLinks: React.SFC<Props> = (props) => <div className={props.classes.container}>
  <div className={props.classes.centered}>
    {isWidthUp('md', props.width)?
      <div style={{color:'white'}}><Typography color='inherit'>Get in touch:</Typography></div>:null}
    <div>
      <Tooltip title='Contact us directly'>
        <Link to='/contact-us' style={{textDecoration: 'none'}}>
          <IconButton style={{color: 'white'}}>
            <Contact className={props.classes.imageStyle}/>
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip title='Find us on LinkedIn'>
        <IconButton href='http://www.linkedin.com'>
          <img src={LinkedIn} alt='LinkedIn' className={props.classes.imageStyle}/>
        </IconButton>
      </Tooltip>
      <Tooltip title='Find us on Facebook'>
        <IconButton href='http://www.facebook.com'>
          <img src={Facebook} alt='Facebook' className={props.classes.imageStyle}/>
        </IconButton>
      </Tooltip>
    </div>
  </div>
</div>

export default withWidth()(withStyles(styles)(SocialMediaLinks))