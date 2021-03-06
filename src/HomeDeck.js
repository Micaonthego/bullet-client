import React, { Component } from 'react'
import Profile from './Profile'
import './Homedeck.css';
import NewBullet from './NewBullet'
import Footer from './Footer'

class HomeDeck extends Component {

    componentDidMount() {
        if (localStorage.getItem('token')) {
            let token = localStorage.getItem('token')
            this.autoLogin(token)
        }
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
                <div className="main-page">
                    <Profile currentUser={this.props.currentUser} bullets={this.props.bullets} />
                    <NewBullet addBullet={this.props.addBullet}
                        bullets={this.props.bullets}
                        setCurrentUser={this.props.setCurrentUser}
                        currentBullet={this.props.currentBullet}
                        afterUpdate={this.props.afterUpdate}
                        updateBullet={this.props.updateBullet}
                        updateLike={this.props.updateLike}
                    />
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}


export default HomeDeck