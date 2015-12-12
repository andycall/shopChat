import React from 'react'
import './index.scss'

export default class TitleBar extends React.Component {
    render() {
        return (
            <div className="_namespace">
                <div className="back">
                    <i className="fa fa-arrow-left"
                       style={{marginRight:5}}></i>返回
                </div>
                {this.props.title}
            </div>
        )
    }
}