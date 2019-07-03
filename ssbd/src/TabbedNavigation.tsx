import React from 'react'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import { Tabs, Tab, Paper, Grid } from '@material-ui/core'
import pages from './Pages'
import Logo from './images/Logo.jpg'
import SocialMediaLinks from './SocialMediaLinks'
import {withStyles, Theme, createStyles, WithStyles} from '@material-ui/core/styles'

const styles = ({palette, typography}: Theme) => createStyles({
  header: {
    padding:'2%',
    backgroundImage: `linear-gradient(to right, white, white, ${palette.primary.light}, ${palette.primary.main}, ${palette.primary.dark})`
  },
  tab: {
    '&:hover': {
      color: palette.primary.light
    },
    '&:focus': {
      color: palette.primary.light
    },
    '&$selected': {
      color: palette.primary.main,
      fontWeight: 'bold'
    }
  }
})

type Props = RouteComponentProps & WithStyles<typeof styles>

const TabbedNavigation: React.SFC<Props> = ({classes, history, location}) => 
  <Paper>
    <div className={classes.header}>
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
      <Tabs value={location.pathname} indicatorColor='primary' textColor='primary' variant='fullWidth'>
        {pages.map(({name, path}) => 
          <Tab 
            disableRipple
            className={classes.tab}
            key={path}
            label={name}
            value={path}
            onClick={() => history.push(path)}
          />
        )}
      </Tabs>
    </Paper>
  
export default withRouter(withStyles(styles)(TabbedNavigation))