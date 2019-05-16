import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Signup from './Signup'
import Landing from './Landing'
import Login from './Login'


function App() {
  return (
    < React.Fragment >
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/' component={Landing} />
      </Switch>
    </React.Fragment >
  );
}

export default App;
