export interface AuthModalType {
    setOpenClosePanel: (data: boolean) => void
    getRegisterAuth: (data: {}) => void
    getLoginAuth: (data: {}) => void
    
}

export interface LoginType {
    setRegisterPopup: () => void;
    getLoginAuth: (data: {}) => void
}

export interface RegisterType {
    setRegisterPopup: () => void;
    getRegisterAuth: (data: {}) => void;
}


export interface LoginRequestType {
    setRegisterPopup: () => void;
}

export interface RegisterRequestType {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
}