/**
 * @author dongtiancheng
 * @date 15/12/7.
 * @email dongtiancheng@baidu.com
 */
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import HomeComponent from './home'
import BusinessComponent from './business'

import ChartGroupComponent from './chartGroup'
import FansComponent from './fans'
import NearByComponent from './near-by'
import SelfComponent from './self'

let routes = (
    <Router>
        <Route path="/"
               component={HomeComponent}></Route>
        <Route path="/nearby"
               component={NearByComponent} ></Route>
        <Route path="/business"
               component={BusinessComponent}></Route>
        <Route path="/chart-group"
               component={ChartGroupComponent}></Route>
        <Route path="/fans"
               component={FansComponent}></Route>
        <Route path="/self"
               component={SelfComponent}></Route>
    </Router>
)

export {routes}