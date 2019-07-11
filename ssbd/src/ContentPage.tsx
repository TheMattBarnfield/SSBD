import React, { ReactNode } from 'react'
import { Typography, Divider } from '@material-ui/core'
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles'

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

const ContentPage: React.SFC<Props & WithStyles<typeof styles>> = (props) =>
    <div className={props.classes.container}>
      <div style={{margin:8}}>
        <Typography variant='h4' color='primary' gutterBottom>{props.title}</Typography>
        <Divider />
      </div>
      {props.children}
    </div>

export default withStyles(styles)(ContentPage)
