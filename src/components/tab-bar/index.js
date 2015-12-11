/**
 * Created by andycall on 15/12/11.
 */

import React from 'react'
import classnames from 'classnames'

let tabConfig = [
    {
        text: '附近',
        icon: 'fa-map-marker',
        href: '#/'
    },
    {
        text: '聊过',
        icon: 'fa-comment',
        href: '#/nearby'
    },
    {
        text: '我的',
        icon: 'fa-user',
        href: '#/user'
    }
]

import './index.scss'

export default class TabBar extends React.Component {
    render () {
        let tabs = tabConfig.map((item, index) => {
            return (
                <li>
                    <a href={item.href}>
                        <i className={classnames('fa', item.icon)}></i>
                        <span>{item.text}</span>
                    </a>
                </li>
            )
        })

        return (
            <ul className="_namespace">
                { tabs }
            </ul>
        )
    }
}