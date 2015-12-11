/**
 * Created by andycall on 15/12/11.
 */

let React = require('react')
let classnames = require('classnames')


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

let tabBar = React.createClass({
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
})

module.exports = tabBar