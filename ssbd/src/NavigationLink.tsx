import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import {Link} from 'react-router-dom'

interface Props {
    children: React.ReactNode
    to: string
    closeDrawer?: () => void
}

const NavigationLink: React.SFC<Props> = (props: Props) => 
    <Link to={props.to} style={{textDecoration: 'none'}}>
        <ListItem button onClick={props.closeDrawer}>
            <ListItemText primary={props.children}/>
        </ListItem>
    </Link>


export default NavigationLink