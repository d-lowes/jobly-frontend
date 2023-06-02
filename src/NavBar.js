import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";

/** Display NavBar with links to Home, Companies, and Jobs.
 * if user is logged in, display logout and profile links
 * if user is not logged in, display sign up and login links
 *
 * props:
 * - logout: calls the logout function
 */

function NavBar({ logout }) {
  const { user } = useContext(userContext);
  /*TODO:
  create function of logged-inNav and logged-outNav and
  use a ternary to return the function based on user status
  */
  if (!user) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="nav-item nav-link" to="/">Jobly</NavLink>
        <div className="navbar" id="navbarNav">
          <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
          <NavLink className="nav-item nav-link" to="/signup">Signup</NavLink>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="nav-item nav-link" to="/">Jobly</NavLink>
        <div className="navbar" id="navbarNav">
          <NavLink className="nav-item nav-link" to="/companies">
            Companies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/jobs">Jobs</NavLink>
          {/* <NavLink className="nav-item nav-link" to="/profile">Profile</NavLink> */}
          <NavLink className="nav-item nav-link" to="/" onClick={logout}>
            Logout {user.username}
          </NavLink>
        </div>
      </nav>
    );
  }

  // return (
  //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //     <NavLink className="nav-item nav-link" to="/">Jobly</NavLink>
  //     <div className="navbar" id="navbarNav">
  //       <NavLink className="nav-item nav-link" to="/companies">Companies</NavLink>
  //       <NavLink className="nav-item nav-link" to="/jobs">Jobs</NavLink>
  //       {!user && <NavLink className="nav-item nav-link" to="/login">Login</NavLink>}
  //       {!user && <NavLink className="nav-item nav-link" to="/signup">Signup</NavLink>}
  //       {user && <NavLink className="nav-item nav-link" to="/profile">Profile</NavLink>}
  //       {user && <NavLink className="nav-item nav-link" to="/" onClick={logout}>Logout {user.username}</NavLink>}
  //     </div>
  //   </nav>
  // );
}

export default NavBar;;