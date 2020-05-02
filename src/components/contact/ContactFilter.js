import React, { useContext ,useRef,useEffect} from 'react'
import ContactContext from '../context/contact/ContactContext'

export default function ContactFilter() {
    const contactContext = useContext(ContactContext);
    const { filtered, filterContact, clearFilter } = contactContext;
    const text = useRef('');
    useEffect(() => {
        if (filtered === null) {
            text.current.value = ''
        }
    })
    const onChange = (e) => {
        if (text.current.value !== '') {
            filterContact(e.target.value)
        } else {
            clearFilter()
        }
    }
    return (
        <form>
            <input ref={text} type="text" placeholder="Filter contacts..." onChange={onChange} />
        </form>
    )
}
