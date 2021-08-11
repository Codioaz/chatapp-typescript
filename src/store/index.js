  
import {createStore, combineReducers, applyMiddleware} from 'redux'
// import { productPageReducer } from './reducers/productPageReducer'
import thunk from 'redux-thunk'
// import { authenReduser } from './reducers/authReducer'
// import { userInfoReducer } from './reducers/userInfoReducer'


//ALL REDUCERS
const reducers = combineReducers({
    users:{name:'sarkhan',age:26}, 
})

//STORE
export const store = createStore(reducers,{},applyMiddleware(thunk))