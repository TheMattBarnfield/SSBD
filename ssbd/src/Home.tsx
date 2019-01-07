import React, { Component } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import HomeGridList from './HomeGridList';

const sloganStyle = {
  fontStyle: 'italic',
  margin: 10
}

const Home: React.SFC<{}> = () => <div style={{padding: 20}}>
    <Typography align='center' style={sloganStyle} variant='h6'>
      "Your trusted partner for Bright Drawing, Centreless Grinding and Surface Finishing solutions"
    </Typography>
    <Divider variant='middle'/>
    <HomeGridList />
  </div>

export default Home;
