import React from "react";
import logo from "../img/sw_logo.png";

function Nav() {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={logo}></img>
      </div>

      <ul>
        <li>Home</li>
        <li>Heroes</li>
        <li>Movies</li>
      </ul>
    </div>
  );
}

export default Nav;
