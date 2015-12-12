import React from 'react'
import TitleBar from '../components/title-bar'
import Chart from '../components/chart'
import './index.scss'

export default class BusinessComponent extends React.Component {
    render() {
        return (
            <div className="_namespace">
                <TitleBar title="正在和卡哇伊聊天中"></TitleBar>

                <Chart left
                       content="哈哈,你好~"/>
                <Chart right
                       content="叔叔我们约不约~ 233."/>
                <Chart left
                       content="^~^"/>

                <input className="input"/>
            </div>
        )
    }
}

