import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { IconContext } from "react-icons";
import './Nav.css';


    function NavDot() {
        return (
           <IconContext.Provider value={{ color: "black", className: "global-class-name", size: "3em" }}>
         <nav role="navigation">
  <ul className="dropdown">
    <li className="bars"><FaBars/>
    <ul>
        <li className="bars"><Link to='/homedeck'>HOME</Link></li>
        <li className="bars"><Link to='/about'>ABOUT</Link></li>
        <li className="bars"><Link to='/calendar'>CALENDAR</Link></li>
        <li className="bars"><a href="#">TIMELINE</a></li>
        <li className="bars"><Link to='/'>LOGOUT</Link></li>
      </ul>
      </li>
  </ul>
</nav>
</IconContext.Provider>
        )
    }

    export default NavDot;