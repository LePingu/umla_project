import React, { Component } from 'react';
import { Register } from './authentication/Register';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from './authentication/Dashboard.js';
import { Login } from './authentication/Login.js';
import { PrivateRoute } from './routing/PrivateRoute.js';
import './App.css';

class App extends Component {
  render() {
  return (
  <div className="App">
      <div className="App-content">
          <Switch>  
              <Route exact path="/" component={Login}/>
              <Route exact path ="/signup" component={Register}/>
              <PrivateRoute path='/dashboard' component={Dashboard} />
          </Switch>
      </div>
  </div>
  );
}
}

export default App;
