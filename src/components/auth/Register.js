import React,{useState,useContext,useEffect} from 'react'
import AuthContext from '../context/auth/AuthContext'
import AlertContext from '../context/alerts/AlertContext'
export default function Register(props) {
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext);
    const { register, error, clearErrors,isAuth} = authContext;
    const { setAlert} = alertContext;
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2:''
    })

    useEffect(() => {
        if (isAuth) {
            props.history.push('/')
        }
        if (error === 'User already exists') {
            setAlert(error, 'danger');
            clearErrors()
        }
        //eslint-disable-next-line
    },[ error, isAuth, props.history])
    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email ===''|| password === '') {
            setAlert('Please enter all the required fields.','danger')
        } else if (password !== password2) {
            setAlert('Password do not match.', 'danger')

        } else {
            register({
                name,
                email,
                password
            })
            
        }

    }


    const { name, email, password, password2 } = user;
    return (
        <div className="form-container">
            <h1>Account <span className="text-primary">Register</span></h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="Name">Confirm Password</label>
                    <input type="password" name="password2" value={password2} onChange={onChange} />
                </div>
                <input type="submit" value="Register" className="btn btn-dark btn-block"/>
            </form>
        </div>
    )
}
