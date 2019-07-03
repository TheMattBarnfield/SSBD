import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import {Link} from 'react-router-dom'
import { Typography } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/icons/Menu'
import SocialMediaLinks from './SocialMediaLinks';

interface Props {
  openMenu: () => void
  title: string
}

const spacerStyle = {
  flexGrow: 1
}

const MobileNavBar:React.SFC<Props> = (props) => <AppBar position='static'>
    <Toolbar variant='dense'>
      <IconButton onClick={props.openMenu} color='inherit'><Menu/></IconButton>
      <Link to='/index' style={{textDecoration: 'none', color:'inherit'}}>
        <Typography variant='h6' color='inherit' noWrap>{props.title}</Typography>
      </Link>
      <div style={spacerStyle}/>
      <SocialMediaLinks/>
    </Toolbar>
  </AppBar>

export default MobileNavBar