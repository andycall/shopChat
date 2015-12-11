/**
 * Created by andycall on 15/12/12.
 */
import React from 'react'
import TabBar from '../components/tab-bar'

export default class NearByComponent extends React.Component {
    constructor (props) {
        super(props)

    }

    render () {

        return (
            <div className="_namespace">
                <TabBar active="#/nearby" />
            </div>
        )

    }
}