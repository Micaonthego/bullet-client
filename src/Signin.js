import React, { Component } from 'react'
import './App.css';

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
                if (response.errors) {
                    alert("Please try Again")
                } else {
                    this.props.setCurrentUser(response)
                }
            })
        this.props.history.push(`/homedeck`)
    }

    // fetch for create user or lookup user 
    handleSubmit = (e) => {
        e.preventDefault()
        this.userSignin()
    }

    signinClick = () => {

    }

    render() {
        return (
            <div className="container" id="container">
                {/* <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1> */}
                {/* <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div> */}
                {/* <span>or use your email for registration</span>
                        <input type="text" placeholder="Username" name="username" />
                        <input type="text" placeholder="Aspiration" name="aspiration" />
                        <input type="password" placeholder="Password" name="password" />
                        <button onClick={this.openWidget}>+ Photo</button>
                        <button>Sign Up</button>
                    </form>
                </div> */}
                <div class="form-container sign-in-container">
                    <form onSubmit={this.handleSubmit} action="#">
                        <h1>Sign in</h1>
                        {/* <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div> */}
                        {/* <span>or use your account</span> */}
                        <input onChange={this.onChange} type="text" placeholder="Username" name='username' />
                        <input onChange={this.onChange} type="password" placeholder="Password" name="password" />
                        <br />
                        <br />
                        {/* <a href="#">Forgot your password?</a> */}
                        <button>Sign In</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your personal info
            </p>
                            <button class="ghost" id="signIn">Sign In</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button class="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin;