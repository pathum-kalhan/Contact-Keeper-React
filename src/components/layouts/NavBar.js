import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default function NavBar({title,icon}) {
    return (
        <div className="navbar bg-primary">
            <h1>
            <i className={icon}></i> {title}
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>

                </li>
            </ul>
        </div>
    )
}

NavBar.prototype ={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string
}

NavBar.defaultProps = {
    title:'Contact Keeper',
    icon:'far fa-address-book'
}
