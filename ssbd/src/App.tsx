import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/icons/Menu'
import './App.css';
import {Route, Redirect, Switch} from 'react-router-dom';
import Processes from './Processes'
import Home from './Home'
import Quality from './Quality'
import Management from './Management'
import Contact from './Contact'
import NotFound from './NotFound'

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
          <IconButton 
            onClick={this.openDrawer}
          >
            <Menu />
          </IconButton>
        </AppBar>
        <Switch>
          <Redirect from='/index' to='/'/>
          <Route path='/' exact component={Home}/>
          <Route path='/processes' component={Processes}/>
          <Route path='/quality' component={Quality}/>
          <Route path='/management' component={Management}/>
          <Route path='/contact-us' component={Contact}/>
          <Route component={NotFound}/>
        </Switch>
        <Drawer open={this.state.drawerOpen} onClose={this.closeDrawer}>Menu item</Drawer>
      </>
    );
  }

  private openDrawer = () => this.setState({drawerOpen: true})
  private closeDrawer = () => this.setState({drawerOpen: false})
}

export default App;
