/**
 * @author dongtiancheng
 * @date 15/12/7.
 * @email dongtiancheng@baidu.com
 */
let React = require('react')
let reactRouter = require('react-router')
let Router = reactRouter.Router
let Route = reactRouter.Route
let IndexRoute = reactRouter.IndexRoute

let Home = require('./home')

module.exports = (
    <Router>
        <Route path="/" component={Home}></Route>
    </Router>
)