import React from "react";
import { useState, useContext } from "react";
import { JoblyApi } from "../API";
import { Navigate } from "react-router-dom";
import userContext from "../userContext";

/** Render a Profile form.
 *
 * State:
 * - formData: user's infotmation inputs
 *
 * { NavBar, RoutesList } -> ProfileForm
 */
function ProfileForm() {
  const { user } = useContext(userContext);

  const [formData, setFormData] = useState({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
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
    await JoblyApi.editProfile(formData);

    return (
      <Navigate to="/profile" />
    );
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className=" container-fluid">
      <form className="search-form " onSubmit={handleSubmit}>

        <div className="row justify-content-center">
          <label htmlFor="username-input">Username:</label>
          <input
            disabled="disabled"
            name="username"
            id="username-input"
            value={user.username}
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

export default ProfileForm;;