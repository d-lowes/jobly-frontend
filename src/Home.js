import React from "react";
import { useContext } from "react";
import userContext from "./userContext";
import './index.css';

/** Render the homepage.
 */
function Home() {
  const { user } = useContext(userContext);

  return (
    <div className="bg-job-hiring bg-cover h-screen">
      <h1 className="text-white">Jobly</h1>
      <h3  className="text-white">All the jobs in one, convenient place.</h3>
      {user && <h4 className="text-white"> Hello, {user.username}!</h4>}
    </div>
  );
}

export default Home;