import React, { useState,useContext,useEffect } from 'react'
import AuthContext from '../context/auth/AuthContext'
import AlertContext from '../context/alerts/AlertContext'
export default function Login(props) {
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext);
    const { login, error, clearErrors, isAuth } = authContext;
    const { setAlert } = alertContext;
    useEffect(() => {
        if (isAuth) {
            props.history.push('/')
        }
        if (error === 'Invalid Credentials') {
            setAlert(error, 'danger');
            clearErrors()
        }
        //eslint-disable-next-line
    }, [ error, isAuth, props.history])
    const [user, setUser] = useState({
       email: '',
        password: '',
        
    })
    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault();
        if (  email === '' || password === '') {
            setAlert('Please enter all the required fields.', 'danger')
        }  else {
            login({
               
                email,
                password
            })

        }

    }


    const { email, password } = user;
    return (
        <div className="form-container">
            <h1>Account <span className="text-primary">Login</span></h1>
            <form onSubmit={onSubmit}>
                
                <div className="form-group">
                    <label labelFor="email"></label>
                    <input type="email" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label labelFor="password"></label>
                    <input type="password" name="password" value={password} onChange={onChange} />
                </div>
                
                <input type="submit" value="Login" className="btn btn-dark btn-block" />
            </form>
        </div>
    )
}
