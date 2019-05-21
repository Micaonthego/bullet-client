import React, { Component } from 'react'
import Profile from './Profile'
import NewBullet from './NewBullet'

class HomeDeck extends Component {
    render() {
        // console.log(this.props.currentUser)
        return (
            <div>
                <Profile />
                <NewBullet />
            </div>
        )
    }
}

export default HomeDeck