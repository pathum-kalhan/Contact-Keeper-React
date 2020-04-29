import React, { useState, useContext } from 'react'
import ContactContact from '../context/contact/ContactContext'
export default function ContactForm() {
    const contactContext = useContext(ContactContact)
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'proffesional'
    });

    const { name, email, phone, type } = contact;

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault();
        contactContext.addContact(contact);
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'proffesional'
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">Add contact</h2>
            <input type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={onChange} />

            <input type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={onChange} />

            <input type="text"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={onChange} />

            <h5>Contact Type</h5>
            <input type="radio" name="type" value="personal" checked={type === 'personal'} /> Personal{' '}
            <input type="radio" name="type" value="proffesional" checked={type === 'proffesional'} /> Proffesional{' '}
            <div>
                <input type="submit" className="btn btn-primary btn-block" value="Add contact" />
            </div>

        </form>
    )
}
