/**
 * @author dongtiancheng
 * @date 15/12/7.
 * @email dongtiancheng@baidu.com
 */

"use strict"

let koa = require('koa')
let app = koa()

var staticCache = require('koa-static-cache')

app.use(staticCache('output', {
    prefix: './output',
    maxAge: 60 * 60 * 24,
    buffer: true,
    gzip: true,
    usePrecompiledGzip: true
}))

app.on('error', (err) => {
    log.error('server error', err);
});

process.on('uncaughtException', (err) => {
    console.error('未捕获错误', err)

    //打印出错误
    console.log(err)

    //打印出错误的调用栈方便调试
    console.log(err.stack)
})

var templateHtml = require('fs').readFileSync('./index.html')

app.use(function *() {
    this.type = 'text/html; charset=utf-8'
    this.body = templateHtml
})

app.listen(8080)
