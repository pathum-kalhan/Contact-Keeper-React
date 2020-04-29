import React from 'react'

export default function ContactItem({ contact }) {
    const { id, name, phone, email, type } = contact;
    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                {name}{' '}<span className={'badge ' + (type === 'proffesional' ? 'badge-success' : 'badge-primary')}>
                    {type.charAt(0).toUpperCase()+type.slice(1)}
                </span>
            </h3>
            <ul className="list">
                {email && (<li>
                    <i className="fas fa-envelope-open"></i> {email}
                </li>)}
                {phone && (<li>
                    <i className="fas fa-phone"></i> {phone}
                </li>)}
            </ul>

        </div>
    )
}
