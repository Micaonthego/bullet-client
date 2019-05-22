import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Signup from './Signup'
import Landing from './Landing'
import Signin from './Signin'
import HomeDeck from './HomeDeck'
import NavDot from './NavDot'
import Calendar from './Calendar'

class App extends Component {

  state = {
    currentUser: null,
    bullets: []
  }

  setCurrentUser = (response) => {
    this.setState({
      currentUser: response.user, 
      bullets: response.user.bullets
    }, () => {
      localStorage.setItem("token", response.token)
    })
  }

          addBullet = (newBullet) => {
            fetch('http://localhost:3000/bullets', {
            method: 'POST',
            headers:
                { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': localStorage.getItem('token') },
            body: JSON.stringify({ bullet: newBullet })
        })
            .then(res => res.json())
            .then((response) => {
                if (response.errors) {
                    alert("Please check your info 🙃")
                } else {
                  this.setState({bullets: [...this.state.bullets, response]})
                }
                // this.props.history.push(`/calendar`)
            }
            )
    }


  render() {
    return (
      < React.Fragment >
        <Switch>
          <Route path='/calendar' render={(props) => {
            return <Calendar  bullets={this.state.bullets}  {...props} />
          }} />
          <Route path='/homedeck' render={(props) => {
            return <HomeDeck addBullet={this.addBullet} bullets={this.state.bullets} setCurrentUser={this.setCurrentUser}  {...props} />
          }} />
          <Route path='/signin' render={(props) => {
            return <Signin setCurrentUser={this.setCurrentUser} {...props} />
          }} />
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
