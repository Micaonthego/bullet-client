import React, { Component } from 'react'

class Bullet extends Component {

    state = {
        gratitude: '',
        priority: '',
        accomplishment: '',
        reflection: '',
        favorite: false,
        photo: '',
        date: moment().format("MMM Do YY")
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createBullet = () => {
        const newBullet = {
            gratitude: this.state.gratitude,
            priority: this.state.priority,
            accomplishment: this.state.accomplishment,
            reflection: this.state.reflection,
            favorite: this.state.favorite,
            photo: this.state.photo,
            date: this.state.date
        }

        fetch('http://localhost:3000/bullets', {
            method: 'POST',
            headers:
                { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ bullet: newBullet })
        })
            .then(res => res.json())
            .then((response) => {
                if (response.errors) {
                    alert("Please check your info 🙃")
                }
            }
            )
        // this.props.history.push(`/homedeck`)
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

}


render() {
    return (
        <div>

        </div>
    )
}
}

export default Bullet