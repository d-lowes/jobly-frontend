import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfileForm({ editProfile }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
    await editProfile(formData);
    navigate("/profile");
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
            value={formData.username}
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

export default ProfileForm;;