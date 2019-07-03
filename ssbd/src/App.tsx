import React, { Component } from 'react'
import Routing from './Routing'
import Navigation from './Navigation'
import TabbedNavigation from './TabbedNavigation'
import withWidth, { WithWidth, isWidthUp } from '@material-ui/core/withWidth';
import MobileNavBar from './MobileNavBar'

type Props = WithWidth

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
    const appTitle = this.props.width === 'xs'? 'SSBD Ltd.': 'SS Bright Drawers Ltd.'

    const tabbedAppBar = <TabbedNavigation/>

    const mobileAppBar = <MobileNavBar title={appTitle} openMenu={this.openDrawer}/>

    return (
      <div>
        {isWidthUp('sm', this.props.width)?tabbedAppBar:mobileAppBar}
        <Navigation open={this.state.drawerOpen} onClose={this.closeDrawer}/>
        <Routing/>
      </div>
    );
  }

  private openDrawer = () => this.setState({drawerOpen: true})
  private closeDrawer = () => this.setState({drawerOpen: false})
}

export default withWidth()(App);
