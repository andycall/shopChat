/**
 * Created by andycall on 15/12/12.
 */
import React from 'react'

import './index.scss'

import pic from './QQ20151212-0.png'

export default class ShopComponent extends React.Component {
    render () {
        let right = this.props.isNumber ?
            <p className="number">111</p> :
            <p className="button"></p>


        return (
            <div className="_namespace">
                <div className="image_container">
                    <img src={pic} alt=""/>
                </div>
                <div className="content">
                    <h2>棒棒糖 TV</h2>
                    <div className="status">
                        <i className="fa fa-users"></i>
                        <span>2000</span>
                        <i className="fa fa-ticket"></i>
                        <span>9折</span>
                    </div>
                </div>
                <div className="right">
                    {right}
                </div>
            </div>
        )
    }
}
