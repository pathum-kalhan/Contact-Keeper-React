import React, { useReducer } from 'react'
import { v4 as uuidv4} from 'uuid'
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
} from '../types'

const ContactState = props => {
    const intialState = {
        contacts: [
            { name: 'Malinda',id:1,phone:'0717565094',email:'some@gmail.com',type:'personal' },
            { name: 'Chamod',id:2,phone:'0717565094',email:'some@gmail.com',type:'proffesional' },
            { name: 'Hiran',id:3,phone:'0717565094',email:'some@gmail.com',type:'personal' },
            { name: 'Kasun',id:4,phone:'0717565094',email:'some@gmail.com',type:'proffesional' }
        ],
        current: null,
        filtered:null
    }
    const [state, dispatch] = useReducer(ContactReducer, intialState)

    // actions

    // ADD CONTACT
    const addContact = (contact) => {
        contact.id = uuidv4();
        dispatch({type:ADD_CONTACT,payload:contact})
    }

    //DELETE CONTACT
    const deleteContact = (id) => {
        dispatch({type:DELETE_CONTACT,payload:id})
    }

    //SET CURRENT STATE
    const setCurrent = (current) => {
        dispatch({ type: SET_CURRENT, payload: current })
    }

    //CLEAR CURRENT
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT})
    }

    //UPDATE CONTACT
    const updateContact = (contact) => {
        dispatch({ type: UPDATE_CONTACT,payload:contact })
    }

    //FILTER CONTACT
    const filterContact = (text) => {
        dispatch({ type: FILTER_CONTACT, payload: text })
    }

    //CLEAR FILTERED
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }



    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            current: state.current,
            updateContact,
            filterContact,
            filtered: state.filtered,
            clearFilter
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;