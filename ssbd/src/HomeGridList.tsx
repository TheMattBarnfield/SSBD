import React, { CSSProperties } from 'react'
import GridList from '@material-ui/core/GridList'
import { GridListTile, GridListTileBar } from '@material-ui/core'
import pages, {Page} from './Pages'
import {Link} from 'react-router-dom'
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos'
import withWidth, { WithWidth } from '@material-ui/core/withWidth'
import IconButton from '@material-ui/core/IconButton';

const cols = {
    'xl': 5,
    'lg': 3,
    'md': 3,
    'sm': 2,
    'xs': 1
}

const tile: CSSProperties = {
    borderRadius: 5
}

const HomeGridList: React.SFC<WithWidth> = props => 
    <GridList cols={cols[props.width]} spacing={20} style={{margin: 20}}>
        {pages.map(makeGridListTile)}
    </GridList>

const makeGridListTile = (page: Page) => <GridListTile key={page.name}>
    <Link to={page.path}>
    <img src={page.image} alt={page.name} style={{width:'100%', height:'100%',...tile}}/>
    {<GridListTileBar 
        title={page.name}
        actionIcon={
            <IconButton>
                <ArrowForwardIos style={{color: 'rgba(255,255,255,0.54'}}/>
            </IconButton>
        }
        style={tile}
    />}
    </Link>
</GridListTile>

export default withWidth()(HomeGridList)