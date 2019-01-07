import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import Processes from './Processes'
import Home from './Home'
import Quality from './Quality'
import Management from './Management'
import Contact from './Contact'
import NotFound from './NotFound'
import GDPR from './GDPR';
import { pages } from './App';

const Routing: React.SFC = () => <Switch>
    <Redirect from='/index' to='/'/>
    <Route path='/' exact component={Home}/>
    {pages.map(page => <Route path={page.path} component={page.page}/>)}
    <Route component={NotFound}/>
</Switch>

export default Routing