import React, { useState, useContext ,useEffect} from 'react'
import ContactContact from '../context/contact/ContactContext'
export default function ContactForm() {
    const contactContext = useContext(ContactContact)
    const { addContact, current, clearCurrent, updateContact } = contactContext;
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'proffesional'
    });

    useEffect(() => {
        if (current !== null) {
            setContact(current)
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'proffesional'
            })
        }
    }, [current,contactContext])
    const { name, email, phone, type } = contact;

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault();
        if (current === null) {
            addContact(contact);
            
        } else {
            updateContact(contact)
        }
        clearAll()
       
    }

    const clearAll = () => {
        clearCurrent()
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">{current?'Edit':'Add'} contact</h2>
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
                <input type="submit" className="btn btn-primary btn-block" value={current ? 'Update contact' :'Add contact'} />
            </div>
            {current && 
            <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
            }

        </form>
    )
}
