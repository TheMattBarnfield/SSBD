import React, { Component } from 'react';
import './App.css';
import managers, {Manager} from './Managers';
import ManagerDetailsCard from './ManagerDetailsCard';
import { Grid, Typography, Divider } from '@material-ui/core';

const Management: React.SFC = props => <div style={{padding: 36}}>
  <Grid container spacing={24}>
    {managers.map(createManagerDetailsCardInGrid)}
  </Grid>
</div>

const createManagerDetailsCardInGrid = (manager: Manager) => 
  <Grid item xs={12} md={6} lg={4} key={manager.name}>
    <ManagerDetailsCard {...manager}/>
  </Grid>

export default Management;
