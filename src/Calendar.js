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
        return fetch('http://localhost:3000/bullets', {
            method: 'GET',
            headers:
                { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': localStorage.getItem('token') }
        })
            .then(res => res.json())
            .then(bullets => this.setState({ bullets }))
    }

    renderBullets = () => {
        return this.state.bullets.map(bullet => <BulletCard key={bullet.id} bullet={bullet} />)
    }

    render() {
        // console.log(this.state.bullets)
        return (
            <div>
                {this.renderBullets()}
            </div>
        )
    }
}

export default Calendar