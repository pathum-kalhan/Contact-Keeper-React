import React,{Fragment,useContext} from 'react'
import ContactContext from '../context/contact/ContactContext'
import ContactItem from '../contact/ContactItem';
export default function Contact() {
    const contactContext = useContext(ContactContext);
    const {contacts}= contactContext;
    return (
        <Fragment>
            {
                contacts.map(contact=>
                    <ContactItem key={contact.name} contact={contact}/>

                )
            }
        </Fragment>
    )
}
