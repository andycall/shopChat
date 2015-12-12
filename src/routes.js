/**
 * @author dongtiancheng
 * @date 15/12/7.
 * @email dongtiancheng@baidu.com
 */
import React from 'react'
import { Router, Route, IndexRoute, Redirect } from 'react-router'

import HomeComponent from './home'
import BusinessComponent from './business'

import ChartGroupComponent from './chartGroup'
import ChatPersionComponent from './chatPersion'
import FansComponent from './fans'
import NearByComponent from './near-by'
import SelfComponent from './self'
import HomepageComponent from './homepage'

let routes = (
    <Router>
        <Route path="/"
               component={HomeComponent}>
        </Route>
        <Route path="/nearby"
               component={NearByComponent}></Route>
        <Route path="/business"
               component={BusinessComponent}></Route>
        <Route path="/chat-group"
               component={ChartGroupComponent}></Route>
        <Route path="/chat-person"
               component={ChatPersionComponent}></Route>
        <Route path="/fans"
               component={FansComponent}></Route>
        <Route path="/self"
               component={SelfComponent}></Route>
        <Route path="/homepage"
               component={HomepageComponent}></Route>
    </Router>
)

export {routes}