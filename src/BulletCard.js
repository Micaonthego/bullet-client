import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

function BulletCard(props) {
    console.log(props)
    return (
        <div className="row">
            <div className="col-1-of-3">
                <button onClick={() => props.deleteBullet(props.bullet.id)}><FaTrashAlt  /></button>
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture--1">
                            &nbsp;
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
                                        <li>{props.bullet.gratitude}</li>
                                        <li>{props.bullet.priority}</li>
                                        <li>{props.bullet.accomplishment}</li>
                                        <li>{props.bullet.reflection}</li>
                                    </ul>                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BulletCard;