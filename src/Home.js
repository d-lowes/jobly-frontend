import React from "react";
import { useContext } from "react";
import userContext from "./userContext";
import './index.css';

/** Render the homepage.
 */
function Home() {
  const { user } = useContext(userContext);

  return (
    <div className="bg-job-hiring bg-contain h-screen flex flex-col items-center justify-center">
      <div className="bg-black flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-4">
        <h1 className="text-white mb-4 font-extrabold leading-none tracking-tight text-gray-900 text-5xl">Jobly</h1>
        <h3 className="text-white text-2xl">All the jobs in one, convenient place.</h3>
        {user && <h4 className="text-white text-1xl pt-2"> Hello, {user.username}!</h4>}
      </div>
    </div>
  );
}

export default Home;