import { useState, useEffect } from 'react';
import userContext from "./userContext";
import { JoblyApi } from './API';
import './App.css';
import RoutesList from './RoutesList';
import jwt_decode from "jwt-decode";
import NavBar from './NavBar';

/** Render the routes list
 *
 * state:
 * - token: the token returned from signing up/logging in
 * - user: user object
 *
 * effect:
 * - fetchUser: get user data from the API
 */
function App() {
  let storedToken = localStorage.getItem("token") || null
  const [token, setToken] = useState(storedToken);
  const [user, setUser] = useState(null);

  /**
   * When a token is set or changed, get the user data from the API, set user
   * and update the token
   */
  useEffect(function fetchAndSetUser() {
    async function fetchUser() {
      if (token) {
        const { username } = jwt_decode(token);
        JoblyApi.token = token;
        const currUser = await JoblyApi.getUser(username);
        setUser(currUser);
      } else {
        setUser(null);
      }
    }
    fetchUser();
  }, [token]);

  /** Login and get token from the backend, store it on the token state */
  async function login(data) {
    const newToken = await JoblyApi.login(data);
    setToken(newToken);
  }

  /** Signup and get token from the backend, store it on the token state */
  async function signup(data) {
    const newToken = await JoblyApi.signup(data);
    setToken(newToken);
  }

  /** Reset the token and user states */
  function logout() {
    setToken("");
  }

  return (
    <userContext.Provider value={{ user }}>
      <div className="App">
        <NavBar logout={logout} />
        <RoutesList login={login} signup={signup} logout={logout} />
      </div>
    </userContext.Provider>
  );
}

export default App;
