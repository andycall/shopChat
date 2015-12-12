/**
 * Created by andycall on 15/12/12.
 */
import React from 'react'

import './index.scss'

export default class PersonComponent extends React.Component {
    onClick () {
        location.hash = '#/chat-person'
    }

    render () {
        return (
            <div className="_namespace" onClick={this.onClick}>
                <div className="image_container">
                    <img src={this.props.person_url} alt=""/>
                </div>
                <div className="content">
                    <div className="clearfix">
                        <h2>{this.props.person_name}</h2>
                        <span className="distance">{this.props.person_distance}m</span>
                    </div>
                    <div className="status">
                        <i className="fa fa-users"></i>
                        <span>{this.props.person_age}岁</span>
                        <i className="fa fa-ticket"></i>
                        <span>{this.props.person_height}cm</span>
                    </div>
                </div>
                <div className="right">
                    <button class="chat">聊天</button>
                </div>
            </div>
        )
    }
}
