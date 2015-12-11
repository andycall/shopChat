/**
 * @author dongtiancheng
 * @date 15/12/7.
 * @email dongtiancheng@baidu.com
 */

import TabBar from '../components/tabbar'
import React from 'react'

module.exports = React.createClass({
    render () {
        console.log(this.props)

        return (
            <div className="_namespace">
                <TabBar tabs={this.props.tabs} />
            </div>
        )
    }
})