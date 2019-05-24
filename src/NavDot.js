
import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { IconContext } from "react-icons";
import './Nav.css';


class NavDot extends React.Component {

  logOut = () => {
    localStorage.removeItem('token')
  }
  render() {

    return (
      <IconContext.Provider value={{ color: "black", className: "global-class-name", size: "3em" }}>
        <nav role="navigation">
          <ul className="dropdown">
            <li className="bars"><FaBars />
              <ul>
                <li className="bars"><Link to='/homedeck'>HOME</Link></li>
                <li className="bars"><Link to='/about'>ABOUT</Link></li>
                <li className="bars"><Link to='/calendar'>CALENDAR</Link></li>
                <li className="bars"><Link to='/timeline'>TIMELINE</Link></li>
                <li className="bars" onClick={this.logOut}><Link to='/'>LOGOUT</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    )
  }
}


export default NavDot;