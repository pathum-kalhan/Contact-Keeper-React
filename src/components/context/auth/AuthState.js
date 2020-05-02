import React, { useReducer } from 'react'
import axios from 'axios';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import setAuthToken from '../../../utils/setAuthToken'
import {
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    CLEAR_ERRORS,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from '../types'

const AuthState = props => {
    const intialState = {
        token: null,
        user: null,
        isAuth: false,
        loading: true,
        error:null
    }
    const [state, dispatch] = useReducer(AuthReducer, intialState)

    // actions
    const loadUser = async () => {
        if (localStorage.token) {
            setAuthToken(localStorage.token)
        }
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASEURL}auth`)
            dispatch({
                type: USER_LOADED, payload: res.data
            })
        } catch (error) {
            dispatch({ type: AUTH_ERROR })
        }
    }

    //register user
    const register = async (formData) => {
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }

        try {
            const res = await axios.post(`${process.env.REACT_APP_BASEURL}users`, formData, config);
            dispatch({
                type:REGISTER_SUCCESS,payload:res.data
            })
            loadUser()
            
        } catch (error) {
            console.error(error.response.data.msg)
            dispatch({
                type: REGISTER_FAILED,payload:error.response.data.msg
            })
        }
    }

    const clearErrors = ()=> dispatch({type:CLEAR_ERRORS})

    //login user
    const login = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post(`${process.env.REACT_APP_BASEURL}auth`, formData, config);
            dispatch({
                type: LOGIN_SUCCESS, payload: res.data
            })
            loadUser()

        } catch (error) {
            console.error(error.response.data.msg)
            dispatch({
                type: LOGIN_FAILED, payload: error.response.data.msg
            })
        }
    }

    
    



    return (
        <AuthContext.Provider value={{
            register,
            clearErrors,
            error: state.error,
            loadUser,
            user: state.user,
            isAuth: state.isAuth,
            loading: state.loading,
            login
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;