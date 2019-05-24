import React from 'react'
// import { FaTrashAlt } from 'react-icons/fa';
import './BulletCard.css';
import { Link } from 'react-router-dom'



function BulletCard(props) {
    console.log(props)
    return (
        <div className="row">
            <div className="col-1-of-3">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture--1">
                            {/* <img src={props.bullet.photo}> */}
                            &nbsp;
                            {/* </img> */}
                        </div>
                        <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--1">{props.bullet.date}</span>
                        </h4>
                    </div>
                    <div className="card__side card__side--back card__side--back-1">
                        <div className="card__cta">
                            <div className="card__bullet-box">
                                <div className="card__details">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <button onClick={() => props.deleteBullet(props.bullet.id)}>Delete</button>
            <button>Like</button>
            <Link to={`/homedeck/${props.bullet.id}`}><button>Edit</button></Link>
        </div>

    )
}

export default BulletCard;