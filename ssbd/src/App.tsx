import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/icons/Menu'
import Routing from './Routing'
import Toolbar from '@material-ui/core/Toolbar'
import Navigation from './Navigation'
import { Typography } from '@material-ui/core'
import {Link} from 'react-router-dom'
import Contact from '@material-ui/icons/ContactSupport'
import Facebook from './images/facebook logo.png'
import LinkedIn from './images/linkedin logo.png'
import Tooltip from '@material-ui/core/Tooltip';
type Props = {}

interface State {
  drawerOpen: boolean
}

const imageStyle = {
  height: 24,
  width: 24
}

const spacerStyle = {
  flexGrow: 1
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      drawerOpen: false
    }
  }
  render() {
    return (
      <>
        <AppBar position='static'>
          <Toolbar variant='dense'>
            <IconButton onClick={this.openDrawer} color='inherit'><Menu/></IconButton>
            <div style={spacerStyle}/>
            <Tooltip title='Contact us'><IconButton color='inherit'><Contact/></IconButton></Tooltip>
            <Tooltip title='Find us on LinkedIn'><IconButton href='http://www.linkedin.com'><img src={LinkedIn} alt='LinkedIn' style={imageStyle}/></IconButton></Tooltip>
            <Tooltip title='Find us on Facebook'><IconButton href='http://www.facebook.com'><img src={Facebook} alt='Facebook' style={imageStyle}/></IconButton></Tooltip>
          </Toolbar>
        </AppBar>
        <Navigation open={this.state.drawerOpen} onClose={this.closeDrawer}/>
        <Routing/>
      </>
    );
  }

  private openDrawer = () => this.setState({drawerOpen: true})
  private closeDrawer = () => this.setState({drawerOpen: false})
}

export default App;
