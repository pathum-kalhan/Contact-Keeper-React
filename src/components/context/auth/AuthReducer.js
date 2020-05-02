import {
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    CLEAR_ERRORS,
    AUTH_ERROR,
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from '../types'
export default (state, action) => {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                user:action.payload,
                isAuth: true,
                loading: false
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token',action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuth: true,
                loading:false
            }
        case REGISTER_FAILED:
        case AUTH_ERROR:
        case LOGIN_FAILED:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuth: false,
                loading: false,
                user: null,
                error:action.payload
                
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }
        
        default:
            return state;
    }
}