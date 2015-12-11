/**
 * @author dongtiancheng
 * @date 15/12/7.
 * @email dongtiancheng@baidu.com
 */
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Home from './home'
import BusinessComponent from './business'

module.exports = (
    <Router>
        <Route path="/"
               component={Home}></Route>
        <Route path="/business"
               component={BusinessComponent}></Route>
    </Router>
)