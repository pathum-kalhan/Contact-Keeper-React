import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {ADD_CONTACT} from '../types'

const ContactState = props => {
    const intialState = {
        contacts: [
            { name: 'Malinda',id:1,phone:'0717565094',email:'some@gmail.com',type:'personal' },
            { name: 'Chamod',id:1,phone:'0717565094',email:'some@gmail.com',type:'proffesional' },
            { name: 'Hiran',id:1,phone:'0717565094',email:'some@gmail.com',type:'personal' },
            { name: 'Kasun',id:1,phone:'0717565094',email:'some@gmail.com',type:'proffesional' }
        ]
    }
    const [state, dispatch] = useReducer(ContactReducer, intialState)

    // actions

    // ADD CONTACT
    const addContact = (contact)=>{
        dispatch({type:ADD_CONTACT,payload:contact})
    }

    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            addContact
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;