import { toast } from 'react-toastify'
import { baseURL } from '../../helper/baseURL'
import { RegisterType } from '../../interface/auth.model'
import * as type from '../type'


//Register
export const getRegisterAuth  = (data:RegisterType)  => (dispatch:any) => {
    dispatch({type:type.GET_SIGNUP_PAGE, payload:null})

    console.log(data);
    

    // baseURL.post('/accounts/api/register/',data)
    //         .then((resp) =>{ dispatch({type:type.GET_LOGIN_PAGE, payload:true }) 
    //                          dispatch({type:type.GET_SIGNUP_PAGE, payload:false})
    //                          toast.success('Successfully register')})
    //         .catch((err) => toast.error(err.message))
}
