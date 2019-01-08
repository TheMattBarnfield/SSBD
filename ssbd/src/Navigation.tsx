import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import NavigationLink from './NavigationLink'
import { ListItem, ListItemText } from '@material-ui/core'
import pages, {Page} from './Pages'

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
            {pages.map(createNavigationLink(props))}
        </List>
    </Drawer>

const createNavigationLink = (listProps: Props) => (page: Page) =>
    <NavigationLink key={page.name} to={page.path} closeDrawer={listProps.onClose}>{page.name}</NavigationLink>

export default Navigation;
