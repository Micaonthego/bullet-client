import React from 'react'
import { FaTrashAlt, FaPen, FaRegHeart, FaHeart } from 'react-icons/fa';
import './BulletCard.css';
import { Link } from 'react-router-dom'
import { IconContext } from "react-icons";



function BulletCard(props) {
    // console.log(props)
    return (
        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.25em" }}>
            {/* <div id="card-container"> */}
            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1">
                        <img className="responsive" src={props.bullet.photo} alt="">
                        </img>
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
                                <FaTrashAlt className="trash" onClick={() => props.deleteBullet(props.bullet.id)} />
                                {props.bullet.favorite ? <FaHeart className="heart" onClick={() => props.updateLike(props.bullet)} /> : <FaRegHeart className="heart" onClick={() => props.updateLike(props.bullet)} />}

                                <Link to={`/homedeck/${props.bullet.id}`}><FaPen className="edit" /></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
            <br />
            {/* </div> */}
        </IconContext.Provider>

    )
}

export default BulletCard;