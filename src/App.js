import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
// import Signup from './Signup'
import Landing from './Landing'
import Login from './Login'
import HomeDeck from './HomeDeck'

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
          <Route path='/login' render={(props) => {
            return <Login setCurrentUser={this.setCurrentUser} {...props} />
          }} /> />
          {/* <Route path='/signup' component={Signup} /> */}
          <Route path='/' component={Landing} />
        </Switch>
      </React.Fragment >
    )
  }
}

export default App
