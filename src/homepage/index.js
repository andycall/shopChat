import React from 'react'
import TitleBar from '../components/title-bar'
import SelfTab from '../components/self-tab'
import AlbumComponent from '../components/album'
import Shop from '../components/shop'

import './index.scss'

export default class HomepageComponent extends React.Component {
    render() {
        return (
            <div className="_namespace">
                <TitleBar title="XXX的主页"></TitleBar>

                <SelfTab></SelfTab>

                <h2>相册</h2>

                <AlbumComponent></AlbumComponent>

                <h2>关注的商家</h2>

                <Shop></Shop>

                <div className="chat-wrapper">
                    <button>聊天</button>
                </div>
            </div>
        )
    }
}

