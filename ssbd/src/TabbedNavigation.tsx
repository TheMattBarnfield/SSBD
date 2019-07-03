import React from 'react'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import { Tabs, Tab, Paper, Grid } from '@material-ui/core'
import pages, {Page} from './Pages'
import { History } from 'history';
import Logo from './images/Logo.jpg'
import SocialMediaLinks from './SocialMediaLinks';
import {withStyles, Theme, createStyles, WithStyles} from '@material-ui/core/styles'

type Props = RouteComponentProps & WithStyles<typeof styles>

const styles = ({palette}: Theme) => createStyles({
  header: {
    padding:'2%',
    backgroundImage: `linear-gradient(to right, white, white, ${palette.primary.light}, ${palette.primary.main}, ${palette.primary.dark})`
  }
})

const changeTab = (path: string, history: History<any>) => () => history.push(path)

const createTab = (history: History<any>) => (page: Page) => 
  <Tab key={page.path} label={page.name} value={page.path} onClick={changeTab(page.path, history)}/>

const TabbedNavigation: React.SFC<Props> = (props: Props) => 
  <div>

<Paper>
    <div className={props.classes.header}>
    <Grid container spacing={24}>
      <Grid item xs={3}>
        <Link to='/'>
          <img src={Logo} alt='SSBD Logo' style={{width:'100%'}}/>
        </Link>
      </Grid>
      <Grid item xs/>
      <Grid item xs={3} xl={2}><SocialMediaLinks/></Grid>
    </Grid>
    </div>
      <Tabs value={props.location.pathname} indicatorColor='primary' textColor='primary' variant='fullWidth'>
        {pages.map(createTab(props.history))}
      </Tabs>
    </Paper>
  </div>
  
export default withRouter(withStyles(styles)(TabbedNavigation))