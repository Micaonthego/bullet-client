import React, { Component } from 'react'
import Profile from './Profile'
import './Homedeck.css';
import NavDot from './NavDot'
import NewBullet from './NewBullet'

class HomeDeck extends Component {

    componentDidMount() {
        let token = localStorage.getItem('token')
        this.autoLogin(token)
    }


    autoLogin = (token) => {
        fetch('http://localhost:3000/autologin', {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json', 'Accept': 'application/json',
                'Authorization': token

            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(response => {
                console.log(response)
                if (response.errors) {
                    alert("Please Log in")
                } else {
                    this.props.setCurrentUser(response)
                }
            })
        // this.props.history.push(`/homedeck`)
    }

    render() {
        console.log("we're in the homedeck and this is the current user given by props", this.props.currentUser)


        return (
            <React.Fragment>
                <NavDot />
                <container className="main-page">
                <Profile currentUser={this.props.currentUser} bullets={this.props.bullets} />
                <NewBullet addBullet={this.props.addBullet}
                    bullets={this.props.bullets}
                    setCurrentUser={this.props.setCurrentUser}
                    currentBullet={this.props.currentBullet}
                    afterUpdate={this.props.afterUpdate}
                />
                </container>
                
            </React.Fragment>
        )
    }
}


export default HomeDeck