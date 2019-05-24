import React, { Component } from 'react'
import './Signin.css';
// import NavDot from './NavDot'
import { Link } from 'react-router-dom'

class Signin extends Component {

    state = {
        username: '',
        password: ''
    }

    // need to add password field to the back end
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    userSignin = () => {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json', 'Accept': 'application/json'

            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(response => {
                console.log(response)
                if (response.errors) {
                    alert("Please try Again")
                } else {
                    this.props.setCurrentUser(response)
                }
                this.props.history.push(`/homedeck`)
            })
    }

    // fetch for create user or lookup user 
    handleSubmit = (e) => {
        e.preventDefault()
        this.userSignin()
    }

    render() {
        return (
            <div className="container" id="container">  
                <div className="form-container sign-in-container">
                    <form onSubmit={this.handleSubmit} action="#">
                        <h1 className="black-text">Sign in</h1>
                        <input onChange={this.onChange} type="text" placeholder="Username" name='username' />
                        <input onChange={this.onChange} type="password" placeholder="Password" name="password" />
                        <br />
                        <br />
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your personal info or click to signup
            </p>
                            <button className="ghost" id="signIn"><Link to='/signup'>Sign Up</Link></button>
                        </div>
                    </div>
                </div>
                 {/* <NavDot/> */}
            </div >
        )
    }
}

export default Signin;