import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultStore = fromJS({
    current: 'all'
})

export default (store = defaultStore, action) => {
    switch(action.type) {
        case constants.FOCUS_MENU_ITEM:
        console.log(action.key)
            return store.set('current', action.key)
        default:
            return store;
    }
}