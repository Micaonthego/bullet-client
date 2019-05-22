import React, { Component } from 'react'
import BulletCard from './BulletCard'

class Calendar extends Component {

  renderBullets = () => {
        return this.props.bullets.map(bullet => <BulletCard deleteBullet={this.deleteBullet}  key={bullet.id} bullet={bullet} />)
    }

    deleteBullet = (id) => {
        fetch(`http://localhost:3000/bullets/${id}`, {
            method: 'DELETE',
            headers:
                { 'Authorization': localStorage.getItem('token') },
        })
            .then(res => res.json())
            .then(resp => {
                this.setState(prevState => {
                    let bulletData = prevState.bullets.filter(bullet => bullet.id !== resp.id)
                    return {
                        bullets: bulletData
                    }

                })
            })
    }

    render() {
        // console.log(this.state.bullets)
        return (
            <div>
                {this.renderBullets()}
            </div>
        )
    }
}

export default Calendar