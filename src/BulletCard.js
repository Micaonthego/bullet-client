import React from 'react'

function BulletCard(props) {
    console.log(props)
    return (
        <div class="row">
            <div class="col-1-of-3">
                <div class="card">
                    <div class="card__side card__side--front">
                        <div class="card__picture card__picture--1">
                            &nbsp;
                                </div>
                        <h4 class="card__heading">
                            <span class="card__heading-span card__heading-span--1">{props.bullet.date}</span>
                        </h4>
                    </div>
                    <div class="card__side card__side--back card__side--back-1">
                        <div class="card__cta">
                            <div class="card__bullet-box">
                                <div class="card__details">
                                    <ul>
                                        <li>{props.bullet.gratitude}</li>
                                        <li>{props.bullet.priority}</li>
                                        <li>{props.bullet.accomplishment}</li>
                                        <li>{props.bullet.reflection}</li>
                                    </ul>
                                </div>
                                {/* <p class="card__gratitude"></p>
                                <p class="card__priority"></p>
                                <p class="card__accomplishment"></p>
                                <p class="card__reflection"></p>
                            </div> */}
                            </div>
                            {/* <a href="#popup" class="btn btn--white">Book now!</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BulletCard;