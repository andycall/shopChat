/**
 * Created by andycall on 15/12/12.
 */
import React from 'react'
import TabBar from '../components/tab-bar'
import Shop from '../components/shop'


import './index.scss'

export default class NearByComponent extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="_namespace">
                <div className="nav">
                    <h2>附近</h2>
                </div>

                <ul>
                    <Shop />
                    <Shop />
                    <Shop />
                    <Shop />
                </ul>

                <TabBar active="#/nearby" />
            </div>
        )
    }
}