/**
 * Created by andycall on 15/12/12.
 */
import React from 'react'
import TabBar from '../components/tab-bar'
import Shop from '../components/shop'

import './index.scss'

import Person from '../components/person'

export default class NearByComponent extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        let shops = MOCK_HOME_DATA.map((item, index) => {
            let rightButton = (
                <p className="number"><i className="fa fa-comment"></i> {item.shop_people}人</p>
            )
            return (
                <Shop key={index} {...item} rightButton={rightButton} ></Shop>
            )
        })

        return (
            <div className="_namespace">
                <div className="nav">
                    <h2>附近</h2>
                </div>

                <ul>
                    {shops}
                </ul>

                <TabBar active="#/nearby" />
            </div>
        )
    }
}