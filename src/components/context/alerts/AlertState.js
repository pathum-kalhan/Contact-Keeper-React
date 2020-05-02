import React, { useReducer } from 'react'
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import { v4 as uuidv4 } from 'uuid'

import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types'

const AlertState = props => {
    const intialState = []
    const [state, dispatch] = useReducer(AlertReducer, intialState)

    // actions
    const setAlert = (message, type) =>{
        const id = uuidv4();
        dispatch({
            type: SET_ALERT,
            payload:{message,type,id}
        })

        setTimeout(() => {
            dispatch({
                type: REMOVE_ALERT,
                payload:id
            })
        }, 5000);
    }

    return (
        <AlertContext.Provider value={{
            setAlert,
            alerts:state
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;