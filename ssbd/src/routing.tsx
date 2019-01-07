import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import Processes from './Processes'
import Home from './Home'
import Quality from './Quality'
import Management from './Management'
import Contact from './Contact'
import NotFound from './NotFound'

const Routing: React.SFC = () => <Switch>
    <Redirect from='/index' to='/'/>
    <Route path='/' exact component={Home}/>
    <Route path='/processes' component={Processes}/>
    <Route path='/quality' component={Quality}/>
    <Route path='/management' component={Management}/>
    <Route path='/contact-us' component={Contact}/>
    <Route component={NotFound}/>
</Switch>

export default Routing