export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const USERDETAIL = "USERDETAIL";
export const ISAUTH = "ISAUTH";
export const TOKEN = "TOKEN";

export const loginAction = (payload) => {
    return{
        type: LOGIN,
        payload
    }
}

export const logoutAction = (payload) => {
    return{
        type: LOGOUT,
        payload
    }
}

export const userDetail = (payload) => {
    return{
        type: USERDETAIL,
        payload
    }
}

export const authStatus = (payload) => {
    return{
        type:ISAUTH,
        payload
    }
}

export const getToken = (payload) => {
    return{
        type:TOKEN,
        payload
    }
}