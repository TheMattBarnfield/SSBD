import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import NotFound from './NotFound'
import pages from './Pages'

const Routing: React.SFC = () => <Switch>
    <Redirect from='/index' to='/'/>
    {pages.map(page => <Route key={page.name} path={page.path} component={page.page} exact/>)}
    <Route component={NotFound}/>
</Switch>

export default Routing