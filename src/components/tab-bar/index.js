/**
 * Created by andycall on 15/12/11.
 */

import React from 'react'
import classnames from 'classnames'

let tabConfig = [
    {
        text: '附近',
        icon: 'fa-map-marker',
        href: '/'
    },
    {
        text: '聊过',
        icon: 'fa-comment',
        href: '/nearby'
    },
    {
        text: ''
    }
]

export default class TabBar extends React.Component {

    render () {
        let tabs = tabConfig.map((item, index) => {
            return (<li>
                    <i className={classnames('fa', item.icon)}></i>
                    {item.text}
            </li>)
        })

        return (
            <div className="_namespace">
                { tabs }
            </div>
        )
    }
}