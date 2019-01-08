import React, { Component } from 'react';
import './App.css';
import managers from './Managers';
import ManagerDetailsCard from './ManagerDetailsCard';

const Management: React.SFC = props => <>{managers.map(manager => 
  <ManagerDetailsCard key={manager.name} {...manager}/>
)}</>

export default Management;
