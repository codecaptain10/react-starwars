import React from "react";
import logo from "../img/sw_logo.png";

function Nav() {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={logo}></img>
      </div>

      <ul>
        <li>HOME</li>
        <li>HEROES</li>
        <li>MOVIES</li>
      </ul>
    </div>
  );
}

export default Nav;
