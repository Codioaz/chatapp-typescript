import {combineReducers} from 'redux'
import { authenReduser } from './auth-reducer'
import { userReduser } from './user-reducer'


//ALL REDUCERS
export const reducers = combineReducers({
    auth:authenReduser, 
    usersInfo:userReduser
})

