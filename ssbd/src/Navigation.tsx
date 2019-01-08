import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import NavigationLink from './NavigationLink'
import { ListItem } from '@material-ui/core'
import pages, {Page} from './Pages'
import Logo from './images/Logo.jpg'
import {Link} from 'react-router-dom'

interface Props {
    open?: boolean
    onClose?: () => void
}

const Navigation :React.SFC<Props> = (props: Props) => <Drawer {...props}>
        <List>
            <ListItem>
                <Link to='/' onClick={props.onClose}><img src={Logo} alt='SS Bright Drawers Ltd.'/></Link>
            </ListItem>
            {pages.map(createNavigationLink(props))}
        </List>
    </Drawer>

const createNavigationLink = (listProps: Props) => (page: Page) =>
    <NavigationLink key={page.name} to={page.path} closeDrawer={listProps.onClose}>{page.name}</NavigationLink>

export default Navigation;
