import React from 'react'
import {withStyles, Theme, createStyles, WithStyles} from '@material-ui/core/styles'

const styles = (theme: Theme) => createStyles({
  highlight: {
    color: theme.palette.primary.light,
    fontWeight: 'bold'
  }
})

const HText: React.SFC<WithStyles<typeof styles>> = ({classes, children}) => 
  <span className={classes.highlight}>{children}</span>

export default withStyles(styles)(HText)