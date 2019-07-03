import React, { ReactNode } from 'react'
import { Typography, Divider } from '@material-ui/core'

interface Props {
    title: string
    children?: ReactNode
}

const ContentPage: React.SFC<Props> = (props:Props) =>
    <div style={{padding:24}}>
      <div style={{margin:8}}>
        <Typography variant='h4' color='primary' gutterBottom>{props.title}</Typography>
        <Divider />
      </div>
      {props.children}
    </div>

export default ContentPage;
