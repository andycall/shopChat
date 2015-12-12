/**
 * Created by andycall on 15/12/12.
 */

import React from 'react'
import TabBar from '../components/tab-bar'

export default class SelfComponent extends React.Component {

    render () {

        return (
            <div className="_namespace">
                <TabBar active="#/self"></TabBar>
            </div>
        )
    }
}