/**
 * @author dongtiancheng
 * @date 15/12/7.
 * @email dongtiancheng@baidu.com
 */

import React from 'react'
import TabBar from '../components/tab-bar'

import "./index.scss"

export class ShopComponent extends React.Component {
    render () {
        return (
            <div className="_namespace">
                <div className="image_container">
                    <img src="" alt=""/>
                </div>
                <div className="content">
                    <h2>棒棒糖 TV</h2>
                    <div className="status">
                        <span>粉2000</span>
                        <span>9折</span>
                    </div>
                </div>
                <div className="right">
                    <p>21人</p>
                </div>
            </div>
        )
    }
}

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
                    <p>按距离</p>

                    <ul>
                        <ShopComponent />
                    </ul>
                </div>


                <TabBar active="#/" />
            </div>
        )
    }
}