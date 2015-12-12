import React from 'react'
import ReactDOM from 'react-dom'
import TitleBar from '../components/title-bar'
import Chart from '../components/chart'
import { Socket, Event } from 'react-socket'
import _ from 'lodash'
import $ from 'jquery'
import './index.scss'

export default class BusinessComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            name: 'Guest_' + Math.floor(Math.random() * 10000),
            messages: []
        }
    }

    onMessage(root, name, info, message) {
        let newMessages = _.cloneDeep(this.state.messages)
        newMessages.push({
            name: name,
            message: message
        })

        this.setState({
            messages: newMessages
        }, ()=> {
            let $dom = $('#main-chat-content')
            $dom.scrollTop($dom[0].scrollHeight)
        })
    }

    handleInputChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit(e) {
        if (e.keyCode !== 13)return

        Socket.socket().emit('room', 'bbt', this.state.text)
        this.setState({
            text: ''
        })
    }

    componentDidMount() {
        Socket.socket().emit('me', this.state.name, {info: null})
        Socket.socket().emit('join', 'bbt')

        let $dom = $('#main-chat-content')
        $('#main-chat-content').height($(document).height()-82)
    }

    render() {
        let Messages = this.state.messages.map((item, index)=> {
            if (item.name === this.state.name) {
                return <Chart key={index}
                              left
                              content={item.message}/>
            } else {
                return <Chart key={index}
                              right
                              content={item.message}/>
            }
        })

        return (
            <div className="_namespace">
                <TitleBar return_url="#/business" title="正在和卡哇伊聊天中"></TitleBar>

                <div className="main-chat"
                     id="main-chat-content">{Messages}</div>

                <input className="input"
                       value={this.state.text}
                       onChange={this.handleInputChange.bind(this)}
                       onKeyDown={this.handleSubmit.bind(this)}/>

                <Socket url="http://172.21.206.26:3000"/>
                <Event name="chat"
                       callback={ this.onMessage.bind(this) }/>
            </div>
        )
    }
}
