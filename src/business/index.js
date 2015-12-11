import React from 'react'
import TitleBar from '../components/title-bar'
import './index.scss'

export default class BusinessComponent extends React.Component {
    render() {
        return (
            <div className="_namespace">
                <TitleBar></TitleBar>

                <div className="info-container">
                    <img className="avatar"/>
                    <div className="center">
                        <div className="title">棒棒糖KTV</div>
                        <div>粉丝 2335</div>
                    </div>
                    <div className="right">
                        <div className="watch">关注</div>
                    </div>
                </div>

                <div className="tab">
                    <div className="item">
                        进入群聊
                        <span className="brage">23</span>
                    </div>
                    <div className="item">团购套餐</div>
                    <div className="item">联系商家</div>
                </div>

                <br/>
                <span className="online-number">店内在线用户</span>
                <br/>

                <div className="info-container" style={{marginTop:10}}>
                    <img className="avatar"/>
                    <div className="center">
                        <div className="title">卡哇伊</div>
                        <div>有没有过来一起唱歌的,亲们~~~</div>
                    </div>
                    <div className="right">
                        <div className="watch">聊天</div>
                    </div>
                </div>

                <div className="info-container" style={{marginTop:20}}>
                    <img className="avatar"/>
                    <div className="center">
                        <div className="title">kimi</div>
                        <div>有一起唱歌的吗?888房间哦!</div>
                    </div>
                    <div className="right">
                        <div className="watch">聊天</div>
                    </div>
                </div>

            </div>
        )
    }
}

