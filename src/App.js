import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import Signup from './Signup'
import Signin from './Signin'
import HomeDeck from './HomeDeck'
import About from './About'


// import NavDot from './NavDot'
import Calendar from './Calendar'

class App extends Component {

  state = {
    currentUser: null,
    bullets: []
  }

  setCurrentUser = (response) => {
    console.log(response)
    if (localStorage.getItem('token')) {
      this.setState({
        currentUser: response,
        bullets: response.bullets
      })
    } else {
      this.setState({
        currentUser: response.user,
        bullets: response.user.bullets
      }, () => {
        localStorage.setItem("token", response.token)
      })
    }
    // window.location.reload(true)
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
          this.setState({ bullets: [...this.state.bullets, response] })
        }
        this.props.history.push(`/calendar`)
      }
      )
  }

  afterUpdate = (updatedBullet) => {
    const updatedBullets = this.state.bullets.map((bullet) => {
      return bullet.id === updatedBullet.id ? updatedBullet : bullet
    })
    this.setState({ bullets: updatedBullets })
  }


  deleteBullet = (id) => {
    fetch(`http://localhost:3000/bullets/${id}`, {
      method: 'DELETE',
      headers:
        { 'Authorization': localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(resp => {
        this.setState(prevState => {
          let bulletData = prevState.bullets.filter(bullet => bullet.id !== resp.id)
          return {
            bullets: bulletData
          }

        })
      })
  }

  updateBullet = (id, data) => {
    fetch(`http://localhost:3000/bullets/${id}`, {
      method: 'PATCH',
      headers:
        { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': localStorage.getItem('token') },
      // pass whole obj
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(response => this.afterUpdate(response))
    this.props.history.push(`/calendar`)
  }

  updateLike = (data) => {
    fetch(`http://localhost:3000/bullets/${data.id}`, {
      method: 'PATCH',
      headers:
      {
        'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': localStorage.getItem('token'),
        'Favorite': 'favorite'
      },
      body: JSON.stringify({ favorite: !data.favorite })
    })
      .then(res => res.json())
      .then(response => this.afterUpdate(response))
  }



  render() {
    console.log(this.state.currentUser)
    return (
      < React.Fragment >
        <Switch>
          <Route path='/calendar' render={(props) => {
            return <Calendar updateLike={this.updateLike} deleteBullet={this.deleteBullet} bullets={this.state.bullets}  {...props} setCurrentUser={this.setCurrentUser} />
          }} />
          <Route exact path='/homedeck/:id' render={(props) => {
            const id = props.match.params.id
            const currentBullet = this.state.bullets.find(bullet => bullet.id === parseInt(id))
            return (
              <HomeDeck
                addBullet={this.addBullet}
                bullets={this.state.bullets}
                setCurrentUser={this.setCurrentUser}
                currentUser={this.state.currentUser}
                currentBullet={currentBullet}
                updateBullet={this.updateBullet}
                {...props}
              />
            )
          }} />
          <Route exact path='/homedeck' render={(props) => {
            return <HomeDeck addBullet={this.addBullet} bullets={this.state.bullets} setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser}
              afterUpdate={this.afterUpdate} {...props} />
          }} />
          <Route path='/signup' render={(props) => {
            return <Signup setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} {...props} />
          }} />
          <Route path='/about' component={About} />
          <Route path='/' render={(props) => {
            return <Signin setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} {...props} />
          }} />
        </Switch>
      </React.Fragment >

    )
  }
}

export default withRouter(App);
