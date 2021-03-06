"use strict"

var koa = require('koa')
var app = koa()

// 设置静态资源缓存
var staticCache = require('koa-static-cache')
app.use(staticCache('output', {
    prefix: '/output',
    maxAge: 365 * 24 * 60 * 60,
    buffer: true,
    gzip: true,
    usePrecompiledGzip: true
}))

// 监听错误
app.on("error", function (err) {
    console.log('服务错误', err)
})

// 抓住未捕获的错误
process.on('uncaughtException', function (err) {
    console.error('未捕获错误', err)

    //打印出错误
    console.log(err)

    //打印出错误的调用栈方便调试
    console.log(err.stack)
})

// 入口文件
var templateHtml = require('./html.js')
app.use(function *() {
    this.type = 'text/html; charset=utf-8'
    this.body = templateHtml
})

module.exports = app.listen(8080)