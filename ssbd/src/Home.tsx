import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import HomeGridList from './HomeGridList'
import Logo from './images/Logo.jpg'

const sloganStyle = {
  fontStyle: 'italic',
  margin: 10
}

const logoStyle = {maxWidth: '75%', width: 'auto', height: 'auto'}

const Home: React.SFC<{}> = () => <div style={{padding: 20, textAlign: 'center'}}>
    <img src={Logo} alt='SS Bright Drawers Ltd.' style={logoStyle}/>
    <Typography align='center' style={sloganStyle} variant='h6'>
      Your trusted partner for Bright Drawing, Centreless Grinding and Surface Finishing solutions
    </Typography>
    <Divider variant='middle'/>
    <HomeGridList />
  </div>

export default Home;
