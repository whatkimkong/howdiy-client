import React from "react";
import { NavLink } from "react-router-dom";
import authService from "./services/auth-services";

function Navbar({ isLoggedIn, user, setUser }) {
  const userLogout = () => {
    authService.logout().then(() => {
      setUser(null, false);
    });
  };

  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {isLoggedIn && user && (
          <>
            <li>
              <NavLink to="/">
                <button onClick={() => userLogout()}>Logout</button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>{user.username}</li>
          </>
        )}
        {!isLoggedIn && (
          <>
            <li>
              <NavLink to="/signup">Sign up</NavLink>
            </li>
            <li>
              <NavLink to="/login">Log in</NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
export default Navbar;
