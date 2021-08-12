import * as type from "../type";


let initialState = {
    user: null,
    users: null,
    messages: [],
    userMessageID: null,

}

export const userReduser = (state = initialState, action: any) => {

    switch (action.type) {

        case type.USER_INFO:
            return {
                ...state, user: action.payload
            }

        case type.USERS_INFO:
            return {
                ...state, users: action.payload
            }
        case type.MESSAGE_ID_USER:
            return {
                ...state, userMessageID: action.payload
            }
        case type.USERS_MESSAGE:
            return { ...state, messages: action.payload }

        case type.USERS_MESSAGE__POST:
            return { ...state, messages: [...state.messages, action.payload] }

        case type.USERS_MESSAGE__DELETE:
            return { ...state, messages: state.messages.filter((mes:any) => mes.id !== action.payload ) }

        default:
            return state;
    }
}