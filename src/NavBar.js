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

  /** Show login and signup on the NavBar if no user is logged in */

  function loggedOutNav() {
    return (
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Signup</NavLink>
        </li>
      </ul>
    );
  }
  /** Show Jobs, Companies, logout, and Profile on the NavBar if user is logged
    *  in
    */
  function loggedInNav() {
    return (
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
    );
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink className="flex items-center" to="/">
          <img src="/logos/jobly.png" className="h-8 mr-3" alt="jobly logo"></img>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jobly</span>

        </NavLink>

        <div className="" id="">

          {user ? loggedInNav() : loggedOutNav()}

        </div>
      </div>
    </nav>
  );
}

export default NavBar;;