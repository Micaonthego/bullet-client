
import React from 'react'
// import { Link } from 'react-router-dom'
// import { FaBars } from 'react-icons/fa';
// import { IconContext } from "react-icons";
import './Nav.css';


class NavDot extends React.Component {

  logOut = () => {
    localStorage.removeItem('token')
  }
  render() {

    return (
      <div>
        <ul className="bullet" role="navigation">
          <li className="bullet-logo">
            <a href="/">
              <img src="./blackbullet.png" className="logo" alt="logo" />
            </a>
          </li>
          <li className="bullet-logo">BULLET.</li>
          <li>
            <ul>
              <li className="menu-wrap">
                <input type="checkbox" className="toggler" />
                <div className="cool">
                  <div />
                </div>
                <div className="menu">
                  <div>
                    <div>
                      <ul>
                        <li>
                          <a href="/homedeck">HOME</a>
                        </li>
                        <li>
                          <a href="/about">ABOUT</a>
                        </li>
                        <li>
                          <a href="/calendar">CALENDAR</a>
                        </li>
                        <li>
                          <a href="/timeline">TIMELINE</a>
                        </li>
                        <li>
                          <a onClick={this.logOut} href="/" >LOGOUT</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}



export default NavDot;