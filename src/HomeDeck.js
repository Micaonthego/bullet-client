import React, { Component } from 'react'
import Profile from './Profile'
import NavDot from './NavDot'
import NewBullet from './NewBullet'

class HomeDeck extends Component {


    render() {
        console.log("we're in the homedeck and this is the current user given by props", this.props.currentUser)

       
        return (
            <div>
                <NavDot />
                <Profile currentUser={this.props.currentUser} bullets={this.props.bullets} />
                <br/>
                <br/>
                <NewBullet addBullet={this.props.addBullet} bullets={this.props.bullets} setCurrentUser={this.props.setCurrentUser} />
            </div>
        )
        }
}


export default HomeDeck

