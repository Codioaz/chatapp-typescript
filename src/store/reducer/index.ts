import {combineReducers} from 'redux'
import { authenReduser } from './auth-reducer'


//ALL REDUCERS
export const reducers = combineReducers({
    auth:authenReduser, 
})

