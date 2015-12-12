/**
 * @author dongtiancheng
 * @date 15/12/7.
 * @email dongtiancheng@baidu.com
 */

import React from 'react'
import TabBar from '../components/tab-bar'
import Shop from '../components/shop'

import "./index.scss"

import MOCK_HOME_DATA from '../mock'

export default class HomeComponent extends React.Component {
    render () {

        let shops = MOCK_HOME_DATA.map((item, index) => {
            let rightButton = (
                <p className="number"><i className="fa fa-comment"></i> {item.shop_people}人</p>
            )
            return (
                <Shop key={index} {...item} rightButton={rightButton} ></Shop>
            )
        })

        return (
            <div className="_namespace">
                <div className="nav">
                    <span>附近</span>
                    <form action="" className="search">
                        <div className="field">
                            <input type="text" className="input-search" id="input-search" name="input-search" required />
                            <label for="input-search">Search</label>
                        </div>
                    </form>
                </div>

                <div className="nearby">
                    <h4>附近商家</h4>
                    <p className="distance">按距离</p>

                    <ul>
                        {shops}
                    </ul>
                </div>


                <TabBar active="#/" />
            </div>
        )

    }
}