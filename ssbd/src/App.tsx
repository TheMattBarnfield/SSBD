import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/icons/Menu'
import Routing from './routing'
import Toolbar from '@material-ui/core/Toolbar'
import Navigation from './Navigation'
import { Typography } from '@material-ui/core'
import {Link} from 'react-router-dom'
import Trees from './images/trees.jpg'

export interface Page {
  path: string
  name: string
  image: string
}

export const pages: Page[] = [{
    path: '/processes',
    name: 'Processes',
    image: Trees
  }, {
    path: '/quality',
    name: 'Quality',
    image: Trees
  }, {
    path: '/management',
    name: 'Management',
    image: Trees
  }, {
    path: '/contact-us',
    name: 'Contact Us',
    image: Trees
}]

type Props = {}

interface State {
  drawerOpen: boolean
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
          <Toolbar>
            <IconButton onClick={this.openDrawer} color='inherit'>
              <Menu/>
            </IconButton>
            <Link to='/'><Typography variant='h4' color='inherit'>SS Bright Drawers Ltd.</Typography></Link>
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
