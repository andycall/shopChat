/**
 * @author dongtiancheng
 * @date 15/12/7.
 * @email dongtiancheng@baidu.com
 */

import React from 'react'
import TabBar from '../components/tab-bar'
import Shop from '../components/shop'

import "./index.scss"

export default class HomeComponent extends React.Component {
    render () {

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
                        <Shop isNumber={true} />
                        <Shop isNumber={true} />
                        <Shop isNumber={true} />
                    </ul>
                </div>


                <TabBar active="#/" />
            </div>
        )
    }
}