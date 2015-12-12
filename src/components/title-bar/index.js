import React from 'react'
import './index.scss'

export default class TitleBar extends React.Component {
    onClick () {
        location.hash = '#/'
    }

    render() {
        return (
            <div className="_namespace">
                <div className="back" onClick={this.onClick}>
                    <i className="fa fa-angle-left"
                       style={{marginRight:5}}></i>
                </div>
                {this.props.title}
            </div>
        )
    }
}