import React from 'react'
import TitleBar from '../components/title-bar'

class Home extends React.Component {
    render() {
        return (
            <div>
                <TitleBar></TitleBar>
                <i className="fa fa-arrow-left"
                   style={{marginRight:5}}></i>返回
            </div>
        )
    }
}

module.exports = Home