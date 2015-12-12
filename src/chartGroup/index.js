import React from 'react'
import TitleBar from '../components/title-bar'
import Chart from '../components/chart'
import { Socket, Event } from 'react-socket'
import _ from 'lodash'
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
        console.log(arguments)
        let newMessages = _.cloneDeep(this.state.messages)
        newMessages.push({
            name: name,
            message: message
        })

        this.setState({
            messages: newMessages
        })
    }

    handleInputChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit() {
        Socket.socket().emit('room', 'bbt', this.state.text)
        this.setState({
            text: ''
        })
    }

    componentDidMount() {
        Socket.socket().emit('me', this.state.name, {info: null})
        Socket.socket().emit('join', 'bbt')
    }

    render() {
        let Messages = this.state.messages.map((item)=> {
            if (item.name === this.state.name) {
                return <Chart right
                              content={item.message}/>
            } else {
                return <Chart left
                              content={item.message}/>
            }
        })

        return (
            <div className="_namespace">
                <TitleBar title="正在和卡哇伊聊天中"></TitleBar>

                {Messages}

                <input className="input"
                       value={this.state.text}
                       onChange={this.handleInputChange.bind(this)}/>

                <button onClick={this.handleSubmit.bind(this)}>发送</button>

                <Socket url="http://172.21.206.26:3000"/>
                <Event name="chat"
                       callback={ this.onMessage }/>
            </div>
        )
    }
}
