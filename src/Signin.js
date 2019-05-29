import React, { Component } from 'react'
import './Signin.css';
import './App.css';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';

class Signin extends Component {

    state = {
        username: '',
        password: ''
    }



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
            <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.50em" }}>
                <div className="Landing">

                    <header className="header">
                        {/* <div className="logo-box">
                        <img src="./whitebullet.png" alt="Logo" className="logo-1" />
                    </div> */}
                        <div className='text-box'>
                            <h1 className='heading-primary'>
                                <span className='heading-primary-main'>BULLET.</span>
                                <span className='heading-primary-sub'>you don't have to slow down to get in touch with yourself</span>
                            </h1>
                            {this.props.currentUser ? null :
                                <div>
                                    <form id="signin" onSubmit={this.handleSubmit} action="#">
                                        <input className="signin" onChange={this.onChange} type="text" placeholder="Username" name='username' />
                                        <br />
                                        <input className="signin" onChange={this.onChange} type="password" placeholder="Password" name="password" />
                                        <button>
                                            <FaArrowRight />
                                        </button>
                                    </form>
                                    <Link to="/signup">Create Account</Link>
                                    <br />
                                </div>
                            }
                        </div>
                    </header>
                </div>
            </IconContext.Provider>
        )
    }
}

export default Signin;