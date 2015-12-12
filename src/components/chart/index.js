import React from 'react'
import './index.scss'

export default class TitleBar extends React.Component {
    render() {
        let chartContentStyle = {
            justifyContent: this.props.right ? 'flex-start' : 'flex-end'
        }

        let contentStyle = {
            order: this.props.left ? 1 : 3
        }

        let imgStyle = {
            order: 2
        }

        return (
            <div className="_namespace">
                <div className="chart-content"
                     style={chartContentStyle}>
                    <div style={contentStyle}
                         className="content">
                        {this.props.content}
                    </div>
                    <img style={imgStyle}
                         className="img" src={this.props.url} />
                </div>
            </div>
        )
    }
}