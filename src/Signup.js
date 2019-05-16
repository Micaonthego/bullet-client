import React, { Component } from 'react'
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
            name: this.state.username,
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
        this.props.history.push(`/`)
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
            <div>
                <form onSubmit={this.createUser}>
                    <input onChange={this.onChange} placeholder='Enter Username' name='userame' type='text'>
                    </input>
                    <input onChange={this.onChange} placeholder='Enter Aspiration' name='aspiration' type='text'>
                    </input>
                    <input onChange={this.onChange} placeholder='Enter Password' name='password' type='password'>
                    </input>
                    <button onClick={this.openWidget}>Add Photo</button>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Signup