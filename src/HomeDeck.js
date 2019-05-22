import React, { Component } from 'react'
import Profile from './Profile'
import NewBullet from './NewBullet'

class HomeDeck extends Component {
    render() {
        // console.log(this.props.currentUser)
        return (
            <div>
                <Profile />
                <br/>
                <br/>
                <NewBullet addBullet={this.props.addBullet} bullets={this.props.bullets} setCurrentUser={this.props.setCurrentUser} />
            </div>
        )
    }
}

export default HomeDeck