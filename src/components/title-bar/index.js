import React from 'react'
import './index.scss'

export default class TitleBar extends React.Component {
    onClick () {
        location.hash = this.props.return_url
    }

    render() {
        return (
            <div className="_namespace">
                <div className="back" onClick={this.onClick.bind(this)}>
                    <i className="fa fa-angle-left"
                       style={{marginRight:5}}></i>
                </div>
                {this.props.title}
            </div>
        )
    }
}