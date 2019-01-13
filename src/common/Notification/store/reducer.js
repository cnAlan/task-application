import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultStore = fromJS({
    notification: [
        {
            show: false,
            title: '你好',
            content: '请进行登录',
            link: '',
            key: Math.random()
        }
    ]
})
// show: false,
// title: '',
// content: '',
// link: ''

export default (store = defaultStore, action)=> {
    switch(action.type) {
        case constants.NOTIFICATION:
            let notification = {
                
            }
            return store.set('notification', notification)
        default:
            return store;
    }
}