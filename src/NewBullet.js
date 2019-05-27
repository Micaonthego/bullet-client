import React, { Component } from 'react'
import './NewBullet.css';
import { IconContext } from "react-icons";
import { FaCameraRetro, FaSun } from 'react-icons/fa';
import { withRouter } from 'react-router-dom'

class NewBullet extends Component {

    state = {
        gratitude: '',
        priority: '',
        accomplishment: '',
        reflection: '',
        favorite: false,
        photo: 'https://images.pexels.com/photos/415402/pexels-photo-415402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        date: Date.now
    }

    componentDidMount() {
        if (this.props.currentBullet) {
            this.setState({
                gratitude: this.props.currentBullet.gratitude,
                priority: this.props.currentBullet.priority,
                accomplishment: this.props.currentBullet.accomplishment,
                reflection: this.props.currentBullet.reflection
            })
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createBullet = (e) => {
        e.preventDefault()
        if (this.props.currentBullet) {
            this.updateBullet(this.props.currentBullet.id)
        } else {
            const newBullet = {
                gratitude: this.state.gratitude,
                priority: this.state.priority,
                accomplishment: this.state.accomplishment,
                reflection: this.state.reflection,
                favorite: this.state.favorite,
                photo: this.state.photo,
                date: this.state.date
            }
            this.props.addBullet(newBullet)

            this.setState({
                gratitude: '',
                priority: '',
                accomplishment: '',
                reflection: '',
                favorite: false,
                photo: 'https://images.pexels.com/photos/415402/pexels-photo-415402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                date: Date.now
            }, () => {
                return this.props.history.push(`/calendar`)
            })

        }
    }

    updateBullet = (id) => {
        fetch(`http://localhost:3000/bullets/${id}`, {
            method: 'PATCH',
            headers:
                { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': localStorage.getItem('token') },
            // pass whole obj
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(response => this.props.afterUpdate(response))
        this.props.history.push(`/calendar`)
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
        console.log(this.props.history)
        return (
            <React.Fragment>
                <IconContext.Provider value={{ color: "black", className: "global-class-name", size: "1.50em" }}>
                <container className="new-bullet">
                    <form className="new-bullet" onSubmit={this.createBullet}>
                        <div className="day-log">
                            <label>I am greatful for</label>
                            <input className="new-bullet" value={this.state.gratitude} onChange={this.onChange} type="text" name="gratitude" />
                            <label>I want to prioritize</label>
                            <input className="new-bullet" value={this.state.priority} onChange={this.onChange} type="text" name="priority" />

                        </div>
                        <div className="night-log">
                            <label>I have accomplished</label>
                            <input className="new-bullet" value={this.state.accomplishment} onChange={this.onChange} type="text" name="accomplishment" />
                            <label>I am feeling</label>
                            <input className="new-bullet" value={this.state.reflection} onChange={this.onChange} type="text" name="reflection" />
                        </div>
                        <div className="buttons">
                            <FaCameraRetro onClick={this.openWidget} />
                            <br />
                            <button className="black">Submit</button>
                        </div>
                    </form>
                </container>

                {/* {this.props.bullets.find(bullet => {
                    return bullet.date === this.state.date ? null :
                        <form onSubmit={this.createBullet}>
                            <input value={this.state.gratitude} onChange={this.onChange} type="text" placeholder="I am grateful for..." name="gratitude" />
                            <input onChange={this.onChange} type="text" placeholder="I want to prioritize..." name="priority" />
                            <input onChange={this.onChange} type="text" placeholder="I have accomplished..." name="accomplishment" />
                            <input onChange={this.onChange} type="text" placeholder="I am feeling..." name="reflection" />
                            <button onClick={this.openWidget}><FaCameraRetro /></button>
                            <br />
                            <button>Submit</button>
                        </form>
                })} */}
                </IconContext.Provider>
            </React.Fragment>
        )
    }

}
export default withRouter(NewBullet)