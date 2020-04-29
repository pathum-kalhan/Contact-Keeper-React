import React from 'react'
import Contact from '../contact/Contact'
import ContactForm from '../contact/ContactForm'

export default function Home() {
    return (
        <div className="grid-2">
            <div>
                <ContactForm/>
            </div>
            <div>
            <Contact/>

            </div>
        </div>
    )
}
