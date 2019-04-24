import React, { Component } from 'react';
import { Register } from './authentication/Register';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Dashboard } from './authentication/Dashboard.js';
import { Login } from './authentication/Login.js';
import { CardGame } from './card/Card.js';
import { PrivateRoute } from './routing/PrivateRoute.js';
import './App.css';

class App extends Component {
  render() {
  return (
    <Router>
    <div>
      <h2>Welcome to UMLA</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li><Link to={'/dashboard'} className="nav-link"> Dashboard </Link></li>
        <li><Link to={'/signup'} className="nav-link">Signup</Link></li>
        <li><Link to={'/cardgame'} className="nav-link">Card Game</Link></li>
        <li><Link to={'/'} className="nav-link">Login</Link></li>
      </ul>
      </nav>
      <hr />
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path ="/signup" component={Register}/>
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path='/cardgame' component={CardGame} />
      </Switch>
    </div>
  </Router>
  );
}
}

export default App;
