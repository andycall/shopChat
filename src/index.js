/**
 * @author dongtiancheng
 * @date 15/12/7.
 * @email dongtiancheng@baidu.com
 */

let React = require('react')
let ReactDOM = require('react-dom')

// font-awesome
require('font-awesome/css/font-awesome.css')

let ReactRouter = require('react-router')
let Router = ReactRouter.Router
let routes = require('./routes')

ReactDOM.render(
    routes,
    document.getElementById('main')
)