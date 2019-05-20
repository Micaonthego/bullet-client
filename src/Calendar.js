import React, { Component } from 'react'
import BulletCard from './BulletCard'

class Calendar extends Component {

    state = {
        bullets: []
    }

    componentDidMount() {
        this.fetchBullets()
    }

    fetchBullets = () => {
        return fetch('http://localhost:3000/bullets')
            .then(res => res.json())
            .then(bullets => this.setState({ bullets }))
    }

// map and pass down to bulletcard, in bulletcard make my css cards

    render() {
        // console.log(this.state.bullets)
        return (
            <div>
                {/* <BulletCard /> */}
            </div>
        )
    }
}

export default Calendar