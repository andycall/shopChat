/**
 * @author dongtiancheng
 * @date 15/12/7.
 * @email dongtiancheng@baidu.com
 */

import React from 'react'
import ReactDOM from 'react-dom'
import RemLayout from 'rem-layout'

// font-awesome
import 'font-awesome/css/font-awesome.css'
import './reset.scss'

import { ReactRouter, Router } from 'react-router'

import {routes} from './routes'

//RemLayout()

// 设置页面缩放
const WIDTH = 400
const ratio = screen.width / WIDTH
const meta = document.createElement('meta')
meta.setAttribute('name', 'viewport')
meta.setAttribute('content', 'width=' + WIDTH + ',initial-scale=' + ratio + ',maximum-scale=' + ratio + ',minimum-scale=' + ratio + ',user-scalable=no,target-densitydpi=device-dpi,minimal-ui')
document.getElementsByTagName('head')[0].appendChild(meta)
document.getElementById('main').style.width = WIDTH + 'px'
document.getElementById('main').style.margin = '0 auto'
document.getElementById('main').style.position = 'relative'

ReactDOM.render(
    routes,
    document.getElementById('main')
)