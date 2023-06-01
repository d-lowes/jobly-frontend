import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm({ signup }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
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
    evt.preventDefault();
    await signup(formData);
    navigate("/");
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

        <label htmlFor="firstName-input">First Name:</label>
        <input
          name="firstName"
          id="firstName-input"
          value={formData.firstName}
          onChange={handleChange}
        ></input>

        <label htmlFor="lastName-input">Last Name:</label>
        <input
          name="lastName"
          id="lastName-input"
          value={formData.lastName}
          onChange={handleChange}
        ></input>

        <label htmlFor="email-input">Email:</label>
        <input
          name="email"
          id="email-input"
          value={formData.email}
          onChange={handleChange}
        ></input>
        <button className="btn-primary">Submit</button>
      </form>
    </div>
  );

}

export default SignupForm;