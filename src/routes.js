/**
 * @author dongtiancheng
 * @date 15/12/7.
 * @email dongtiancheng@baidu.com
 */
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Home from './home'
import BusinessComponent from './business'
import ChartGroupComponent from './chartGroup'
import FansComponent from './fans'

let routes = (
    <Router>
        <Route path="/"
               component={Home}></Route>
        <Route path="/business"
               component={BusinessComponent}></Route>
        <Route path="/chart-group"
               component={ChartGroupComponent}></Route>
        <Route path="/fans"
               component={FansComponent}></Route>
    </Router>
)

export {routes}