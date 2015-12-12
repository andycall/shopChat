/**
 * Created by andycall on 15/12/12.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

export default class ModalComponent extends React.Component {
    onClick () {
        location.hash = '#/business'
    }

    onCancel () {
        ReactDOM.findDOMNode(this).style.display = 'none'
    }

    render () {
        return (
            <div className="_namespace">
                <h2>{this.props.title}</h2>
                <p>{this.props.content}</p>
                <div className="button">
                    <div className="cancel" onClick={this.onCancel.bind(this)}>取消</div>
                    <div className="go" onClick={this.onClick}>进入</div>
                </div>
            </div>
        )
    }
}
