/**
 * Created by andycall on 15/12/12.
 */


import KFC from './components/shop/kfc.png'
import STARTBUCKS from './components/shop/starbucks.png'
import BBT from './components/shop/bbt.png'

import KWY from './components/person/kawayi.png'

let MOCK_HOME_DATA = [
    {
        shop_name: '棒棒糖 KTV',
        shop_count: '9213',
        shop_discount: '8.5',
        shop_url: BBT,
        shop_people: 82,
        shop_distance: 1233
    },
    {
        shop_name: 'KFC',
        shop_count: '7783',
        shop_discount: '9.5',
        shop_url: KFC,
        shop_people: 22,
        shop_distance: 231
    },
    {
        shop_name: 'Starbucks',
        shop_count: '2321',
        shop_discount: '9',
        shop_url: STARTBUCKS,
        shop_people: 13,
        shop_distance: 2322
    }
]


let MOCK_PERSON_DATA = [
    {
        person_name: '卡哇伊',
        person_distance: 200,
        person_age: 22,
        person_height: 172,
        person_url: KWY
    }
]

export default MOCK_HOME_DATA
