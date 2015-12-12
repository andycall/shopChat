/**
 * Created by andycall on 15/12/12.
 */

import React from 'react'
import TabBar from '../components/tab-bar'
import SelfTabComponent from '../components/self-tab'
import TabComponent from '../components/tab'

import './index.scss'

export default class SelfComponent extends React.Component {

    render () {

        return (
            <div className="_namespace">
                <div className="nav">
                    <h2>我的</h2>
                </div>

                <div className="self">
                    <SelfTabComponent />
                </div>

                <div className="tabs">
                    <TabComponent order_name="我的订单" orders="11" />
                    <TabComponent order_name="我关注的商家" orders="5" />
                    <TabComponent order_name="我的优惠券" orders="18" />
                </div>
                <TabBar active="#/self"></TabBar>
            </div>
        )
    }
}