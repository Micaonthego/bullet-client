import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.createUser}>
                    <input onChange={this.onChange} placeholder='Enter Username' name='userame' type='text'>
                    </input>
                    <input onChange={this.onChange} placeholder='Enter Password' name='password' type='password'>
                    </input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login