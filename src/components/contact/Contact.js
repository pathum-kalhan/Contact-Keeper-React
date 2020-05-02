import React, { Fragment, useContext } from 'react'
import ContactContext from '../context/contact/ContactContext'
import ContactItem from '../contact/ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
export default function Contact() {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered } = contactContext;

    if (contacts.length === 0) {
        return <h4>Please add a contact...</h4>
    }
    return (
        <Fragment>
            <TransitionGroup>
                {filtered !== null ?
                    (contacts.map(contact =>
                        <CSSTransition key={contact.name} timeout={500} classNames="item">

                            < ContactItem  contact={contact} />
                        </CSSTransition>
                    )

                    ) :

                    contacts.map(contact =>
                        <CSSTransition key={contact.name} timeout={500} classNames="item">

                            <ContactItem contact={contact} />
                        </CSSTransition>

                    )


                }
            </TransitionGroup>
        </Fragment>
    )
}
