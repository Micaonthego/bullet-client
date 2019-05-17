import React, { Component } from 'react'
import Profile from './Profile'
import BulletDeck from './BulletDeck'

class HomeDeck extends Component {
    render() {
        return (
            <div>
                <Profile />
                <BulletDeck />
            </div>
        )
    }
}

export default HomeDeck