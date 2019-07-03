import React from 'react'
import Contact from '@material-ui/icons/ContactSupport'
import Facebook from './images/facebook logo.png'
import LinkedIn from './images/linkedin logo.png'
import Tooltip from '@material-ui/core/Tooltip'
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import {Typography} from '@material-ui/core'
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const imageStyle: CSSProperties = {
  height: '1em',
  width: '1em'
}

const centered: CSSProperties = {
  margin: 'auto',
  display:'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid white',
  borderRadius: '5px'
}


const SocialMediaLinks: React.SFC<{}> = () => <div style={{height: '100%', display:'flex'}}>
  <div style={centered}>
    <div style={{color:'white'}}><Typography color='inherit'>Get in touch:</Typography></div>
    <div>
      <Tooltip title='Contact us directly'><Link to='/contact-us' style={{textDecoration: 'none'}}><IconButton style={{color: 'white'}}><Contact style={imageStyle}/></IconButton></Link></Tooltip>
      <Tooltip title='Find us on LinkedIn'><IconButton href='http://www.linkedin.com'><img src={LinkedIn} alt='LinkedIn' style={imageStyle}/></IconButton></Tooltip>
      <Tooltip title='Find us on Facebook'><IconButton href='http://www.facebook.com'><img src={Facebook} alt='Facebook' style={imageStyle}/></IconButton></Tooltip>
    </div>
  </div>
</div>

export default SocialMediaLinks