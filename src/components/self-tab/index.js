/**
 * Created by andycall on 15/12/12.
 */
import React from 'react'

import './index.scss'

import pic from './QQ20151212-0.png'

export default class SelfTabComponent extends React.Component {
    render () {
        let right = <i className="fa fa-arrow-right"></i>

        return (
            <div className="_namespace">
                <div className="image_container">
                    <img src={pic} alt=""/>
                </div>
                <div className="content">
                    <h2>Jalon</h2>
                    <div className="status">
                        <span>23岁</span>

                        <span>178cm</span>
                    </div>
                </div>
                <div className="right">
                    {right}
                </div>
            </div>
        )
    }
}
