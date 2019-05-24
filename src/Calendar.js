import React, { Component } from 'react'
import BulletCard from './BulletCard'
import NavDot from './NavDot'

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
        return this.props.bullets.map(bullet => <BulletCard deleteBullet={this.props.deleteBullet} key={bullet.id} bullet={bullet} />)
    }

    // deleteBullet = (id) => {
    //     fetch(`http://localhost:3000/bullets/${id}`, {
    //         method: 'DELETE',
    //         headers:
    //             { 'Authorization': localStorage.getItem('token') },
    //     })
    //         .then(res => res.json())
    //         .then(resp => {
    //             this.setState(prevState => {
    //                 let bulletData = prevState.bullets.filter(bullet => bullet.id !== resp.id)
    //                 return {
    //                     bullets: bulletData
    //                 }

    //             })
    //         })
    // }

    render() {
        // console.log(this.state.bullets)
        return (
            <div>
                <NavDot />
                {this.renderBullets()}
            </div>
        )
    }
}

export default Calendar