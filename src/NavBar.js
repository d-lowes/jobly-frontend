import React from "react";
import { Link }  from "react-router-dom";

/** Display NavBar with links to Home, Companies, and Jobs.
 */

//TODO: use NavLink instead of link
function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/">
        Home
      </Link>
      <Link to="/companies">
        Companies
      </Link>
      <Link to="/jobs">
        Jobs
      </Link>
    </nav>
  );
}

export default NavBar;