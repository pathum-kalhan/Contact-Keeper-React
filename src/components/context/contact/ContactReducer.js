import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
} from '../types'
export default (state, action) => {
    switch (action.type) {
        case ADD_CONTACT:

            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case UPDATE_CONTACT:

            return {
                ...state,
                contacts: state.contacts.map(e => e.id === action.payload.id ? action.payload : e)
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(e => e.id !== action.payload)
            }
        case SET_CURRENT: {
            return {
                ...state,
                current: action.payload
            }
        }
        case CLEAR_CURRENT: {
            return {
                ...state,
                current: null
            }
        }
            
        case FILTER_CONTACT: {
            return {
                ...state,
                filtered: state.contacts.filter(contact => {
                    const regx = new RegExp(`${action.payload}`, 'gi');
                    return contact.name.match(regx) || contact.email.match(regx)
                })
            }
        }

        case CLEAR_FILTER: {
            return {
                ...state,
                filtered: null
            }
        }

        default:
            return state;
    }
}