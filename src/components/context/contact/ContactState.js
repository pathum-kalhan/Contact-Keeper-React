import React,{useReducer} from 'react'
import uuid from 'uuid'
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';

const ContactState = props =>{
    const intialState = {
        contacts : []
    }
    const [state,dispatch] = useReducer(ContactReducer,intialState)

    // actions

    return (
        <ContactContext.Provider value={{
            contacts:state.contacts
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;