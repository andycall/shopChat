import React from 'react'
import TitleBar from '../components/title-bar'
import './index.scss'

export default class FansComponent extends React.Component {
    render() {
        return (
            <div className="_namespace">
                <TitleBar title="粉丝列表"></TitleBar>

                <div className="info-container" style={{marginTop:10}}>
                    <img className="avatar"/>
                    <div className="center">
                        <div className="title">卡哇伊</div>
                        <div>22岁 172cm</div>
                    </div>
                    <div className="right">
                        <div className="watch">聊天</div>
                    </div>
                </div>

            </div>
        )
    }
}

