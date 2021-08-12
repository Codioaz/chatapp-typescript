import { toast } from 'react-toastify'
import { baseURL } from '../../helper/baseURL'
import { LoginRequestType, RegisterRequestType } from '../../interface/auth.model'
import * as type from '../type'


//SETTER
export const setOpenClosePanel = (data: boolean) => (dispatch: any) => {
    dispatch({ type: type.GET_LOGIN_PAGE, payload: data })
}




//GETTER

//Register
export const getRegisterAuth = (data: RegisterRequestType) => (dispatch: any) => {

    baseURL.post('auth/register/', data)
        .then((resp) => {
            toast.info('Successfully register')
        }
        )
        .catch((err) => toast.error(err.response.data.message))
}



//Login
export const getLoginAuth = (data: LoginRequestType) => (dispatch: any) => {

    dispatch({ type: type.GET_LOGIN_PAGE, payload: null })

    baseURL.post('auth/login/', data)
        .then((resp) => {
            console.log(resp)

            //write axios 
            baseURL.defaults.headers.common['Authorization'] = `Token ${resp.data.token}`;

            //write local
            localStorage.setItem('token', resp.data.token)

            //write redux
            dispatch({type:type.IS_AUTH, payload:resp.data.token})

            dispatch({ type: type.GET_LOGIN_PAGE, payload: false })
            //message
            toast.info('Welcome Back !')
        })
        .catch((err) => toast.error(err.message))
}



//Check token
export const checkToken = (token:string) => (dispatch:any) => {
    baseURL.defaults.headers.common['Authorization'] =`Token ${token}`;
    dispatch({type:type.IS_AUTH, payload:token})
} 