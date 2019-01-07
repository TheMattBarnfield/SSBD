import React, { Component } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const Home: React.SFC<{}> = () => <div>
    <Typography align='center' style={{fontStyle: 'italic'}} variant='h6'>
      Your trusted partner for Bright Drawing, Centreless Grinding and Surface Finishing solutions
    </Typography>
    <Divider variant='middle'/>
  </div>

export default Home;
