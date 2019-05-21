import React from 'react'
import { Link } from 'react-router-dom'


function NavDot() {
    return (
        <body>
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input>

                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>

                <div className="navigation__background">&nbsp;</div>

                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><a href="#" className="navigation__link">About Bullet</a></li>
                        <li className="navigation__item"> <Link className="navigation__link" to='/homedeck'>Bullet Home</Link></li>
                        <li className="navigation__item"><Link className="navigation__link" to='/calendar'>Calendar View</Link></li>
                        <li className="navigation__item"><a href="#" className="navigation__link">Timeline View</a></li>
                        <li className="navigation__item"><a href="#" className="navigation__link">Signout</a></li>
                    </ul>
                </nav>
            </div>
        </body>
    )
}

export default NavDot;