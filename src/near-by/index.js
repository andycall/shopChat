/**
 * Created by andycall on 15/12/12.
 */
import React from 'react'
import TabBar from '../components/tab-bar'

import './index.scss'

import { MOCK_PERSON_DATA } from '../mock'

import Person from '../components/person'

export default class NearByComponent extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        let persons = MOCK_PERSON_DATA.map((item, index) => {
            return (
                <Person key={index} {...item}></Person>
            )
        })

        return (
            <div className="_namespace">
                <div className="nav">
                    <h2>附近</h2>
                </div>

                <ul className="person-list">
                    {persons}
                </ul>

                <TabBar active="#/nearby" />
            </div>
        )
    }
}