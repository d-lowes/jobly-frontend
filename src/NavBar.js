import React from "react";
import { NavLink } from "react-router-dom";


/** Display NavBar with links to Home, Companies, and Jobs.
 */

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="nav-item nav-link" to="/">Jobly</NavLink>
      <div className="navbar" id="navbarNav">
        <NavLink className="nav-item nav-link" to="/companies">Companies</NavLink>
        <NavLink className="nav-item nav-link" to="/jobs">Jobs</NavLink>
        <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
        <NavLink className="nav-item nav-link" to="/signup">Signup</NavLink>
        <NavLink className="nav-item nav-link" to="/profile">Profile</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;