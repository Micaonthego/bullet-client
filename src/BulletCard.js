import React from 'react'
// import { FaTrashAlt } from 'react-icons/fa';
import './BulletCard.css';


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
                                        <li> <img src="./whitebullet.png" alt="Logo" className="logo" />    {props.bullet.gratitude}</li>
                                        <li>I WILL PRIORITIZE</li>
                                        <li> <img src="./whitebullet.png" alt="Logo" className="logo" />    {props.bullet.priority}</li>
                                        <li>I HAVE ACCOMPLISHED</li>
                                        <li> <img src="./whitebullet.png" alt="Logo" className="logo" />    {props.bullet.accomplishment}</li>
                                        <li>I AM FEELING</li>
                                        <li> <img src="./whitebullet.png" alt="Logo" className="logo" />    {props.bullet.reflection}</li>
                                    </ul>                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <button onClick={() => props.deleteBullet(props.bullet.id)}>Delete</button>
        </div>
        
    )
}

export default BulletCard;