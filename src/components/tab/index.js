/**
 * Created by andycall on 15/12/12.
 */

/**
 * Created by andycall on 15/12/12.
 */
import React from 'react'

import './index.scss'

import pic from './QQ20151212-0.png'

export default class TabComponent extends React.Component {
    render () {
        let right = <i className="fa fa-arrow-right"></i>

        return (
            <div className="_namespace">
                <div className="image_container">
                    <img src={pic} alt=""/>
                </div>
                <div className="content">
                    <h2>我的订单</h2>
                    <span>123</span>
                </div>
                <div className="right">
                    {right}
                </div>
            </div>
        )
    }
}
