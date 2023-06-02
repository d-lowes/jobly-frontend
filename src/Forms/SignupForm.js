import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//TODO: remove hardcoded data

/** Render a signup form.
 *
 * Props:
 * - signup: function that registers user into the database
 *
 * State:
 * - formData: user's infotmation inputs
 *
 * { NavBar, RoutesList } -> SignupForm
 */
function SignupForm({ signup }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "islandboi",
    password: "password",
    firstName: "island",
    lastName: "boi",
    email: "island@boi.com"
  });

  /** Handle form change. */
  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }

  /** Handle form submit. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    await signup(formData);
    navigate("/");
  }

  return (
    <div className=" container-fluid">
      <form className="search-form " onSubmit={handleSubmit}>

        <div className="row justify-content-center">
          <label htmlFor="username-input">Username:</label>
          <input
            name="username"
            id="username-input"
            value={formData.username}

            onChange={handleChange}
          ></input>
        </div>

        <div className="row justify-content-center">
          <label htmlFor="password-input">Password:</label>
          <input
            name="password"
            id="password-input"
            value={formData.password}
            type="password"
            onChange={handleChange}
          ></input>
        </div>

        <div className="row justify-content-center">
          <label htmlFor="firstName-input">First Name:</label>
          <input
            name="firstName"
            id="firstName-input"
            value={formData.firstName}
            onChange={handleChange}
          ></input>
        </div>

        <div className="row justify-content-center">
          <label htmlFor="lastName-input ">Last Name:</label>
          <input
            name="lastName"
            id="lastName-input"
            value={formData.lastName}
            onChange={handleChange}
          ></input>
        </div>

        <div className="row justify-content-center">
          <label htmlFor="email-input">Email:</label>
          <input
            name="email"
            id="email-input"
            value={formData.email}
            onChange={handleChange}
          ></input>
        </div>

        <div className="row justify-content-center">
          <button className="btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );

}

export default SignupForm;;