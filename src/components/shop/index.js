/**
 * Created by andycall on 15/12/12.
 */
import React from 'react'

import './index.scss'

import pic from './QQ20151212-0.png'

export default class ShopComponent extends React.Component {
    onClick () {
        location.hash = '#/business'
    }

    render () {
        return (
            <div className="_namespace" onClick={this.onClick}>
                <div className="image_container">
                    <img src={this.props.shop_url} alt=""/>
                </div>
                <div className="content">
                    <div className="clearfix">
                        <h2>{this.props.shop_name}</h2>
                        <span className="distance">1823m</span>
                    </div>
                    <div className="status">
                        <i className="fa fa-users"></i>
                        <span>{this.props.shop_count}</span>
                        <i className="fa fa-ticket"></i>
                        <span>{this.props.shop_discount}折</span>
                    </div>
                </div>
                <div className="right">
                    {this.props.rightButton}
                </div>
            </div>
        )
    }
}
