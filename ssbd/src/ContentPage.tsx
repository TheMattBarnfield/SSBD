import React, { ReactNode } from 'react'
import { Typography, Divider } from '@material-ui/core'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles'
import Footer from './Footer'

interface Props {
    title: string
    children?: ReactNode
}

const styles = ({palette}: Theme) => createStyles({
  container: {
    backgroundColor: palette.background.default,
    padding: '2%',
    marginTop: '3px'
  }
})

const ContentPage: React.SFC<Props & WithStyles<typeof styles>> = (props) => <div>
      <div className={props.classes.container}>
        <div style={{margin:8}}>
          <Typography variant='h3' component='h1' color='primary' gutterBottom>{props.title}</Typography>
          <Divider />
        </div>
        {props.children}
      </div>
    <Footer/>
    </div>

export default withStyles(styles)(ContentPage)
