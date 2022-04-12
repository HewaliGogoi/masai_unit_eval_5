import {LOGIN, LOGOUT, USERDETAIL, ISAUTH, TOKEN} from './action';

const init = {
    user:{},
    isAuth:false,
    isToken:''
}

export const reducer = (state=init, action) => {
    // console.log(state);
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                user : action.payload
            }
        
        case LOGOUT:
            return {
                ...state,
                user : action.payload
            }

        case USERDETAIL:
            return{
                ...state,
                user:action.payload
            }

        case ISAUTH:
            return{
                ...state,
                isAuth:action.payload
            }

        case TOKEN:
            return{
                ...state,
                isToken: action.payload
            }

        default:
            return state
    }
}