import React from 'react'
import ContentPage from './ContentPage';
import EnquiryCard from './EnquiryCard'
import {Grid, Typography, Card, CardHeader, CardContent, Divider} from '@material-ui/core'
import HText from './HText'

const addressCard = <Card>
  <CardHeader title='Details' titleTypographyProps={{color:'primary'}}/>
  <CardContent>
    <Typography> 
      <HText>SS Bright Drawers (Sheffield) Ltd,</HText> <br></br>
      Worthing Road, <br></br>
      Sheffield. <br></br>
      S9 3JB.
    </Typography>
    <Divider style={{marginTop: '1em', marginBottom: '1em'}}/>
    <Typography>Phone: <HText>01234 567890</HText></Typography>
    <Typography>Email: <HText>email@ssbrightdrawers.co.uk</HText></Typography>
  </CardContent>
</Card>

const Contact: React.SFC<{}> = props => <ContentPage title='Contact Us'>
  <div style={{padding:'2%'}}>
    <Grid container spacing={24}>
      <Grid item xs={12} md={5} lg={4}>{addressCard}</Grid>
      <Grid item xs={12} md={7} lg={8}><EnquiryCard/></Grid>
    </Grid>
  </div>
  
</ContentPage>

export default Contact
