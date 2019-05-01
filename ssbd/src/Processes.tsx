import React, { Component } from 'react'
import ProcessesList from './ProcessesList';
import ContentPage from './ContentPage';

interface Props {

}

interface State {

}

class Processes extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return <ContentPage title='Processes'>
      <ProcessesList/>
    </ContentPage>
  }

}

export default Processes;
