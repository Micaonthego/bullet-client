import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import cloudinary from 'cloudinary-react'

class Signup extends Component {

    state = {
        username: '',
        photo: '',
        password: '',
        aspiration: ''
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createUser = () => {
        const newUser = {
            photo: this.state.photo,
            username: this.state.username,
            password: this.state.password,
            aspiration: this.state.aspiration
        }

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers:
                { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ user: newUser })
        })
            .then(res => res.json())
            .then((response) => {
                if (response.errors) {
                    alert("Please check your info 🙃")
                } else {
                    this.props.setCurrentUser(response)
                }
            }
            )
        this.props.history.push(`/homedeck`)
    }


    openWidget = (e) => {
        e.preventDefault()
        window.cloudinary.createUploadWidget(
            {
                cloudName: process.env.REACT_APP_CLOUD_NAME_KEY,
                uploadPreset: process.env.REACT_APP_UPLOAD_PRESET_KEY
            },
            (error, result) => {

                if (result && result.event === "success") {
                    this.setState({
                        photo: `https://res.cloudinary.com/dxrq2ko4y/image/upload/${result.info.path}`, uploaded: true
                    });
                }
            }
        ).open()
    }

    render() {
        return (
            <div className="container" id="container">
                <div className="form-container sign-in-container">
                    <form onSubmit={this.createUser} action="#">
                        <h1 className="black-text">Create Account</h1>
                        <input onChange={this.onChange} type="text" placeholder="Username" name="username" />
                        <input onChange={this.onChange} type="text" placeholder="Aspiration" name="aspiration" />
                        <input onChange={this.onChange} type="password" placeholder="Password" name="password" />
                        <br />
                        <button onClick={this.openWidget}>+ Photo</button>
                        <br />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}

export default Signup


