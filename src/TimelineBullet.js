import React from 'react'
import './TimelineBullet.css';
import { FaTrashAlt, FaPen, FaRegHeart, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import Footer from './Footer'

function TimelineBullet(props) {
    // console.log(props)
    return (
        <React.Fragment>

            <div className="timeline">
                <div className={props.index % 2 === 0 ? "container left" : "container right"}>
                    <div className="content">
                        <div className="card-timeline">
                            <div className="card-timeline__side card-timeline__side--front">
                                <div className="card-timeline__picture card__picture--1">
                                    <img className="responsive" src={props.bullet.photo} alt="">
                                    </img>
                                </div>
                                <h4 className="card-timeline__heading">
                                    <span className="card-timeline__heading-span card-timeline__heading-span--1">{props.bullet.date}</span>
                                </h4>
                            </div>
                            <div className="card-timeline__side card-timeline__side--back card-timeline__side--back-1">
                                <div className="card-timeline__cta">
                                    <div className="card-timeline__bullet-box">
                                        <div className="card-timeline__details">
                                            <ul>
                                                <li>I AM GRATEFUL FOR</li>
                                                <li>{props.bullet.gratitude}</li>
                                                <li>I WILL PRIORITIZE</li>
                                                <li>{props.bullet.priority}</li>
                                                <li>I HAVE ACCOMPLISHED</li>
                                                <li>{props.bullet.accomplishment}</li>
                                                <li>I AM FEELING</li>
                                                <li>{props.bullet.reflection}</li>
                                            </ul>
                                            <FaTrashAlt className="trash" onClick={() => props.deleteBullet(props.bullet.id)} />
                                            {props.bullet.favorite ? <FaHeart className="heart" onClick={() => props.updateLike(props.bullet)} /> : <FaRegHeart className="heart" onClick={() => props.updateLike(props.bullet)} />}

                                            <Link to={`/homedeck/${props.bullet.id}`}><FaPen className="edit" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default TimelineBullet;