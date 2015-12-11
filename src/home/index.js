/**
 * @author dongtiancheng
 * @date 15/12/7.
 * @email dongtiancheng@baidu.com
 */

import React from 'react'
import TabBar from '../components/tab-bar'

export default class Home extends React.Component {
    render () {
        console.log(this.props)

        return (
            <div className="_namespace">
                <TabBar tabs={this.props.tabs} />
            </div>
        )
    }
}