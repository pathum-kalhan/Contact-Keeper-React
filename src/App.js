import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from '../src/components/layouts/NavBar'
import About from './components/pages/About'
import Home from './components/pages/Home'
import './App.css';
import ContactState from './components/context/contact/ContactState'

function App() {
  return (
    <ContactState>
    <Router>
    <Fragment>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About}/>

        </Switch>
      </div>
    </Fragment>

    </Router>
    </ContactState>
  );
}

export default App;
