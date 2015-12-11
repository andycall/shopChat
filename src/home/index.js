/**
 * @author dongtiancheng
 * @date 15/12/7.
 * @email dongtiancheng@baidu.com
 */

let React = require('react')
let TabBar = require('../components/tabbar')


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