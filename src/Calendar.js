import React, { Component } from 'react'
import BulletCard from './BulletCard'
// import './App.css'
import './BulletCard.css'
class Calendar extends Component {


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

    renderBullets = () => {
        return this.props.bullets.map(bullet => <BulletCard deleteBullet={this.props.deleteBullet} key={bullet.id} bullet={bullet} updateLike={this.props.updateLike} />)
    }

    render() {
        // console.log(this.state.bullets)
        return (
            <div className='cal-h1'>
                <h1 style={{ color: "black" }}>MY BULLETS</h1>
                <div id='card-container'>
                    {this.renderBullets()}
                </div>
            </div>
        )
    }
}

export default Calendar