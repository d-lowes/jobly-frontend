import React from "react";
import { useContext } from "react";
import userContext from "./userContext";

/** Render the homepage.
 */
function Home() {
  const { user } = useContext(userContext);

  return (
    <div className="mt-2">
      <h1>Jobly</h1>
      <h3>All the jobs in one, convenient place.</h3>
      {user && <h4>Hello, {user.username}!</h4>}
      <img src="/jobly.png"  className="img-fluid" alt="jobly logo"></img>
    </div>
  );
}

export default Home;