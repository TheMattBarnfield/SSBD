import React, { Component } from 'react';
import './App.css';

interface Props {

}

interface State {

}

class NotFound extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (<p>Page not found.</p>);
  }

}

export default NotFound;
