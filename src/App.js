import { useState, useContext } from 'react';
import userContext from "./userContext";
import { JoblyApi } from './API';
import './App.css';
import RoutesList from './RoutesList';
import jwt_decode from "jwt-decode";

/** Render the routes list */
function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  let decoded;

  if (token) {
    decoded = jwt_decode(token);
    // const decodedHeader = jwt_decode(token, { header: true });
    console.log("decoded token username =", decoded.username);
  }

  useEffect(function() {
    // endpoint /users/:username
    JoblyApi.token = token;
    const currUser = await JoblyApi.getUser(decoded.username);
    setUser(currUser);
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

  return (
    <div className="App">
      <userContext.Provider value={{ user }}>
        <RoutesList login={login} signup={signup} />
      </userContext.Provider>
    </div>
  );
}

export default App;
