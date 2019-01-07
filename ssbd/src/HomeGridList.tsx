import React from 'react'
import GridList from '@material-ui/core/GridList'
import { GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import { pages, Page } from './App';
import {Link} from 'react-router-dom'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'

const cols = {
    'xl': 5,
    'lg': 4,
    'md': 3,
    'sm': 2,
    'xs': 1
}

const HomeGridList: React.SFC<WithWidth> = props => 
    <GridList cols={cols[props.width]} spacing={20} style={{margin: 20}}>
        {pages.map(makeGridListTile)}
    </GridList>

const makeGridListTile = (page: Page) => <GridListTile key={page.name}>
    <img src={page.image} alt={page.name}/>
    <GridListTileBar 
        title={page.name}
        actionIcon={
            <Link to={page.path} style={{textDecoration: 'none', color: 'rgba(255,255,255,0.54'}}>
                <ArrowForwardIos/>
            </Link>
        }
    />
</GridListTile>

export default withWidth()(HomeGridList)