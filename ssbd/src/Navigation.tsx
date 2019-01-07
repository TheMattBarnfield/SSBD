import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import NavigationLink from './NavigationLink'
import { ListItem, ListItemText } from '@material-ui/core';

interface Props {
    open?: boolean
    onClose?: () => void
}

const Navigation :React.SFC<Props> = (props: Props) => <Drawer {...props}>
        <List>
            <ListItem>
                <ListItemText 
                    primary='SS Bright Drawers Ltd.'
                    primaryTypographyProps={{variant: 'subtitle1'}}
                />
            </ListItem>
            <ListItem divider/>
            {createNavigationLink(props, '/processes', 'Processes')}
            {createNavigationLink(props, '/quality', 'Quality')}
            {createNavigationLink(props, '/management', 'Management')}
            {createNavigationLink(props, '/contact-us', 'Contact Us')}
        </List>
    </Drawer>

const createNavigationLink = (listProps: Props, to: string, component: React.ReactNode) =>
    <NavigationLink to={to} closeDrawer={listProps.onClose}>{component}</NavigationLink>

export default Navigation;
