import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Signup from './Signup'
import Landing from './Landing'
import Signin from './Signin'
import HomeDeck from './HomeDeck'
import NavDot from './NavDot'

class App extends Component {

  state = {
    currentUser: null
  }

  setCurrentUser = (response) => {
    this.setState({
      currentUser: response.user
    }, () => {
      localStorage.setItem("token", response.token)
    })
  }

  render() {
    return (
      < React.Fragment >
        <Switch>
          <Route path='/homedeck' component={HomeDeck} />
          <Route path='/signin' render={(props) => {
            return <Signin setCurrentUser={this.setCurrentUser} {...props} />
          }} /> />
          <Route path='/signup' render={(props) => {
            return <Signup setCurrentUser={this.setCurrentUser} {...props} />
          }} />
          <Route path='/' component={Landing} />
        </Switch>
        <NavDot />
      </React.Fragment >
     
    )
  }
}

export default App
