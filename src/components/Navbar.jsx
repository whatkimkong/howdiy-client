import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
  <div>
    <ul>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/signup'>Sign up</NavLink></li>
    <li><NavLink to='/login'>Log in</NavLink></li>
    </ul>
  </div>
  );
}
export default Navbar;
