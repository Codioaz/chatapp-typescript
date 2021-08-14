// export interface ChatContainerType {

//     state:{
//         auth:{
//             authToken:string;
//         }
//         usersInfo:{
//             user:object;
//             users:object;
//             messages:object[];
//             userMessageID:number;
//             isLoading:boolean;
//         }
//     }

//     location:{
//         pathname:string;
//     }
//     user:{
//         id:number;
//     };
//     checkToken:(token:string)=> void
//     getUser:() => void;
//     getUsers:() => void;
//     deleteMessage:() => void;
//     putMessage:() => void;

//     getMessage:(id:number | string) => void;s

// }

export interface ChatType {
    isLoading: boolean;
    userMessageID: number;
    getMessage: () => void;
    messages: any[];
    getUsersSearch: () => void;
    postMessage: (data: object) => void;
    deleteMessage: (id: number) => void;
    putMessage: (data: object) => void;
    user: {
        id: number
    };
    users: {
        results:object[]
    }
    
}



export interface UserListType {

    isLoading: boolean;
    getMessage: () => void;
    getUsersSearch: (text:string) => void;
    user: {
        id: number
    };
    users: {
        results:object[]
    }

}



export interface UserMesType {
    deleteMessage: (id: number) => void;
    user: {
        id: number
    };

    getMessage: () => void;
    userMessageID: number;
    postMessage: (data: object) => void;
    putMessage: (data: object) => void;
    messages: any[];
}