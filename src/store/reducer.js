import { combineReducers } from 'redux-immutable'

import { reducer as HeaderReducer } from '../common/Header/store'
import { reducer as HomeReducer } from '../pages/Home/store'
import { reducer as LoginReducer } from '../pages/Login/store'

const reducer = combineReducers({
    header: HeaderReducer,
    Home: HomeReducer,
    Login: LoginReducer
})

export default reducer