import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";
import './index.css'
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
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/signup">Signup</NavLink>
        </li>
      </ul>
    );
  }
  /** Show Jobs, Companies, logout, and Profile on the NavBar if user is logged
    *  in
    */
  function loggedInNav() {
    return (
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/companies">Companies</NavLink>
        </li>
        <li>
          <NavLink className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/jobs">Jobs</NavLink>
        </li>
        <li>
          <NavLink className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/" onClick={logout}>
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
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          {user ? loggedInNav() : loggedOutNav()}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;