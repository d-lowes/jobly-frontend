import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//TODO: add docstrings

function LoginForm({login}) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "islandboi",
    password: "password"
  });

  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    await login(formData)
    navigate("/")
  }

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <label htmlFor="username-input">Username:</label>
        <input
          name="username"
          id="username-input"
          value={formData.username}
          onChange={handleChange}
        ></input>
        <label htmlFor="password-input">Password:</label>
        <input
          name="password"
          id="password-input"
          value={formData.password}
          type="password"
          onChange={handleChange}
        ></input>
        <button className="btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;