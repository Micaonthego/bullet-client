import React, { Component } from 'react'
import TimelineBullet from './TimelineBullet'
import NavDot from './NavDot'
class TimelineDeck extends Component {

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

    renderFavoriteBullets = () => {

        let likedBullets = this.props.bullets.filter((bullet) => bullet.favorite === true)
        console.log(likedBullets)
        return likedBullets.map((bullet, index) => <TimelineBullet index={index} deleteBullet={this.props.deleteBullet} key={bullet.id} bullet={bullet} updateLike={this.props.updateLike} />)
    }

    render() {
        console.log(this.props.bullets)
        return (
            <div>
                <h1 style={{ color: "black" }}>TIMELINE</h1>
                {/* <NavDot /> */}
                {this.renderFavoriteBullets()}
            </div>
        )
    }
}

export default TimelineDeck