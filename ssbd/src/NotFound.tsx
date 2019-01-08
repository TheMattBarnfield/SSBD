import React, { Component } from 'react'
import './App.css'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Logo from './images/Logo.jpg'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

const NotFound: React.SFC = () => <div style={{flexDirection:'row', padding: 24}}><Card style={{maxWidth: 600, marginLeft: 'auto', marginRight: 'auto'}}>
  <CardHeader title='Error 404: Page Not Found'/>
  <CardMedia style={{height:0, paddingTop:'40%'}} image={Logo} title='SS Bright Drawers Ltd.'/>
  <CardContent>It appears the page you are trying to access does not exist. Please ensure you've entered the address correctly.</CardContent>
  <CardActions><Link to='/' style={{textDecoration: 'none'}}><Button>Return to our homepage</Button></Link></CardActions>
</Card></div>

export default NotFound;
