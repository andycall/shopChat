/**
 * Created by andycall on 15/12/12.
 */
import React from 'react'
import TabBar from '../components/tab-bar'
import Shop from '../components/shop'

import './index.scss'

import MOCK_PERSON_DATA from '../mock'

import Person from '../components/person'

export default class NearByComponent extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        let shops = MOCK_PERSON_DATA.map((item, index) => {
            return (
                <Shop key={index} {...item}></Shop>
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