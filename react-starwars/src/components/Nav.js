import React from "react";
import logo from "../img/sw_logo.png";
import { Link } from "react-router-dom";

function Nav() {
  const navLinksStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <Link to='/'>
          <img src={logo}></img>
        </Link>
      </div>

      <ul>
        <Link style={navLinksStyle} to='/'>
          <li>HOME</li>
        </Link>
        <Link style={navLinksStyle} to='/heroes'>
          <li>HEROES</li>
        </Link>
        <Link style={navLinksStyle} to='/movies'>
          <li>MOVIES</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
