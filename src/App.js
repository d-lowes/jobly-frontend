import { useState, useContext, useEffect } from 'react';
import userContext from "./userContext";
import { JoblyApi } from './API';
import './App.css';
import RoutesList from './RoutesList';
import jwt_decode from "jwt-decode";

/** Render the routes list
 *
 * state:
 * - token: the token returned from signing up/logging in
 * - user: user object
 *
 */
function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  // everytime token is changed, get the username and query database
  useEffect(() => {
    async function fetchUser() {
      if (token) {
        const { username } = jwt_decode(token);
        // const decodedHeader = jwt_decode(token, { header: true });
        console.log("decoded token username =", username);

        JoblyApi.token = token;
        const currUser = await JoblyApi.getUser(username);
        setUser(currUser);
      }
    }
    fetchUser();
  }, [token]);


  // login and get token from the backend, store it on the token state
  async function login(data) {
    const newToken = await JoblyApi.login(data);
    setToken(newToken);
  }

  // signup and get token from the backend, store it on the token state
  async function signup(data) {
    const newToken = await JoblyApi.signup(data);
    setToken(newToken);
  }

  function logout() {
    setToken("");
    setUser(null);
  }

  return (
    <userContext.Provider value={{ user }}>
      <div className="App">

        <RoutesList login={login} signup={signup} logout={logout}/>

      </div>
    </userContext.Provider>
  );
}

export default App;
