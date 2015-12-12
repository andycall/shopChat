import React from 'react'
import TitleBar from '../components/title-bar'
import './index.scss'

import BBT from '../components/shop/bbt.png'

export default class BusinessComponent extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            focused: this.props.focused,
            fansCount: this.props.fansCount || 123
        }
    }

    goChat () {
        location.hash = '#/chat-group'
    }

    onFocus () {

        let fansCount = this.state.fansCount + 1;

        this.setState({
            focused: true,
            fansCount: fansCount
        })
    }

    render() {

        let focus

        if (this.state.focused) {
            focus = <p className="focusd">已关注</p>
        }
        else {
            focus = <div onClick={this.onFocus.bind(this)} className="watch">关注</div>
        }

        return (
            <div className="_namespace">
                <TitleBar return_url="#/" title="棒棒糖 KTV"></TitleBar>

                <div className="info-container">
                    <img src={BBT} className="avatar"/>
                    <div className="center">
                        <div className="title">棒棒糖KTV</div>
                        <div>粉丝 {this.state.fansCount}</div>
                    </div>
                    <div className="right">
                        {focus}
                    </div>
                </div>

                <div className="tab">
                    <div className="item" onClick={this.goChat.bind(this)}>
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

