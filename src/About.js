import './About.css'
import Footer from './Footer'
import React, { Component } from 'react'

export default class About extends Component {

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
    render() {
        return (
            <React.Fragment>
                <h1 className="about-title">ABOUT</h1>
                <div className="css-typing">
                    <h3>BULLET IS A JOURNALING APP DESIGNED TO HELP YOU GET IN TOUCH WITH YOURSELF IN UNDER A MINUTE EACH DAY.
                </h3>
                    <h3>
                        RECORD WHAT YOU ARE GRATEFUL FOR, SET PRIORITIES, RECOGNIZE YOUR ACHIEVEMENTS, REFLECT ON YOUR FEELINGS AND ADD IMAGES TO CAPTURE MEMORIES.
            </h3>
                    <h3>VIEW ALL OF YOUR BULLETS OR SWITCH TO THE TIMELINE VIEW TO LOOK BACK AT FAVORITED DAYS.</h3>
                    <h3>DON'T GET LOST IN EVERYDAY LIFE.</h3>
                    <h3> JUST BULLET.  </h3>
                </div>
                <Footer />
            </React.Fragment> 
        )
    }
}




