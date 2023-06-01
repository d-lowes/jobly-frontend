import { useState } from 'react';
import { JoblyApi } from './API';
import './App.css';
import RoutesList from './RoutesList';

/** Render the routes list */
function App() {
  const [token, setToken] = useState("")

  async function login(data) {
    const newToken = await JoblyApi.login(data)
    setToken(newToken)
  }

  async function signup(data) {
    const newToken = await JoblyApi.signup(data)
    setToken(newToken)
  }

  return (
    <div className="App">
      <RoutesList login={login} signup={signup} />
    </div>
  );
}

export default App;
