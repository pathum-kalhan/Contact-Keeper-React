import React,{useContext,useEffect} from 'react'
import Contact from '../contact/Contact'
import ContactForm from '../contact/ContactForm'
import ContactFilter from '../contact/ContactFilter'
import AuthContext from '../context/auth/AuthContext'
export default function Home() {
    const authContext = useContext(AuthContext)
    useEffect(() => {
        authContext.loadUser()
    },[authContext])

    return (
        <div className="grid-2">
            <div>
                <ContactForm/>
            </div>
            <div>
                <ContactFilter/>
            <Contact/>

            </div>
        </div>
    )
}
