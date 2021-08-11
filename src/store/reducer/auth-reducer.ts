import * as type from "../type";


let initialState = {
    auth: localStorage.getItem('token'),
    openLoginPage: null,
    closeSignUpPage: null,
}

export const authenReduser = (state = initialState, action: any) => {

    switch (action.type) {

        case type.IS_AUTH:
            return {
                ...state, auth: action.payload
            }

        case type.GET_LOGIN_PAGE:
            return {
                ...state, openLoginPage: action.payload
            }

        case type.GET_SIGNUP_PAGE:
            return {
                ...state, closeSignUpPage: action.payload
            }

        default:
            return state;
    }
}