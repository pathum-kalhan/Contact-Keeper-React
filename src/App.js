import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from '../src/components/layouts/NavBar'
import About from './components/pages/About'
import Home from './components/pages/Home'
import './App.css';
import ContactState from './components/context/contact/ContactState'
import AuthState from './components/context/auth/AuthState'
import AlertState from './components/context/alerts/AlertState'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/alerts/Alert'

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
    <Router>
    <Fragment>
      <Navbar/>
              <div className="container">
                <Alert/>
        <Switch>
          <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />

        </Switch>
      </div>
    </Fragment>

          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
