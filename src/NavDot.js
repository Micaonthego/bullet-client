
import React from 'react'
// import { Link } from 'react-router-dom'
// import { FaBars } from 'react-icons/fa';
// import { IconContext } from "react-icons";
import './Nav.css';


class NavDot extends React.Component {


  render() {
    console.log(this.props)
    return (
      <React.Fragment>

        <div>
          <ul className="bullet" role="navigation">
            <li className="bullet-logo">
              <a href="/">
                <img src="./blackbullet.png" className="logo" alt="logo" />
              </a>
            </li>
            <li className="bullet-logo"></li>
            <li className="menu-wrap">
              <input type="checkbox" className="toggler" />
              <div className="cool">
                <div />
              </div>
              <div className="menu">
                <div>
                  <div>
                    {this.props.currentUser ?

                      <ul>
                        <li>
                          <a href="/">HOME</a>
                        </li>
                        <li>
                          <a href="/about">ABOUT</a>
                        </li>
                        <li>
                          <a href="/homedeck">CREATE</a>
                        </li>
                        <li>
                          <a href="/calendar">BULLETS</a>
                        </li>
                        <li>
                          <a href="/timeline">TIMELINE</a>
                        </li>
                        <li>
                          <a onClick={this.props.logOut} href="/" >LOGOUT</a>
                        </li>
                      </ul> :
                      <ul>
                        <li>
                          <a href="/">HOME</a>
                        </li>
                        <li>
                          <a href="/about">ABOUT</a>
                        </li>
                      </ul>
                    }
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}



export default NavDot;