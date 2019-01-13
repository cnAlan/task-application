import { combineReducers } from 'redux-immutable'
import { reducer as NotificationReducer } from '../common/Notification/store'
import { reducer as HeaderReducer } from '../common/Header/store'
import { reducer as HomeReducer } from '../pages/Home/store'
import { reducer as LoginReducer } from '../pages/Login/store'


const reducer = combineReducers({
    header: HeaderReducer,
    home: HomeReducer,
    login: LoginReducer,
    notification: NotificationReducer
})

export default reducer