import React from 'react'
import managers, {Manager} from './Managers'
import ManagerDetailsCard from './ManagerDetailsCard'
import { Grid } from '@material-ui/core'
import ContentPage from './ContentPage';

const Management: React.SFC = props =>
  <ContentPage title='Management'>
  <div style={{padding: 12}}>
    <Grid container spacing={24}>
      {managers.map(createManagerDetailsCardInGrid)}
    </Grid>
  </div>
  </ContentPage>

const createManagerDetailsCardInGrid = (manager: Manager) => 
  <Grid item xs={12} md={6} lg={4} key={manager.name}>
    <ManagerDetailsCard {...manager}/>
  </Grid>

export default Management;
