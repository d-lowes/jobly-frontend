import { Navbar } from 'flowbite-react';
import { useContext } from 'react';
import userContext from './userContext';
import './index.css';

/**
 * Display NavBar with links to Home, Companies, and Jobs.
 * If the user is logged in, display logout and profile links,
 * otherwise, display sign up and login links.
 *
 * @param {function} logout - Calls the logout function.
 */
function NavBar({ logout }) {
  const { user } = useContext(userContext);

  /**
   * Show login and signup links on the NavBar if no user is logged in.
   */
  function loggedOutNav() {
    return (
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <Navbar.Link
          href="/login"
          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Login
        </Navbar.Link>
        <Navbar.Link
          href="/signup"
          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Signup
        </Navbar.Link>
      </ul>
    );
  }

  /**
   * Show Jobs, Companies, logout, and Profile links on the NavBar if the user is logged in.
   */
  function loggedInNav() {
    return (
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <Navbar.Link
          href="/companies"
          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Companies
        </Navbar.Link>
        <Navbar.Link
          href="/jobs"
          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Jobs
        </Navbar.Link>
        <Navbar.Link
          href="/profile"
          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Profile
        </Navbar.Link>
        <Navbar.Link
          href="/"
          onClick={logout}
          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Logout {user.username}
        </Navbar.Link>
      </ul>
    );
  }

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img
          alt="Jobly Logo"
          className="mr-3 h-8"
          src="/logos/jobly.png"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Jobly
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {user ? loggedInNav() : loggedOutNav()}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
