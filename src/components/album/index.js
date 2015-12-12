/**
 * Created by andycall on 15/12/12.
 */
import React from 'react'

import './index.scss'

import pic from './QQ20151212-0.png'

export default class AlbumComponent extends React.Component {
    render () {

        return (
            <div className="_namespace">
                <div className="image_container">
                    <img src={pic} alt=""/>
                    <img src={pic} alt=""/>
                    <img src={pic} alt=""/>
                    <img src={pic} alt=""/>
                </div>
            </div>
        )
    }
}
