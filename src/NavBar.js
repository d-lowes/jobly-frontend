import { NavLink, Link } from "react-router-dom";
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

  /** Show login and signup on the NavBar if no user is logged in */

  function loggedOutNav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Jobly</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">Signup</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  /** Show Jobs, Companies, logout, and Profile on the NavBar ifuser is logged
    *  in
    */
  function loggedInNav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Jobly</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/companies">Companies</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={logout}>
                  Logout {user.username}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav>
      {user ? loggedInNav() : loggedOutNav()}
    </nav>
  );
}

export default NavBar;