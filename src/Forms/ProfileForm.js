import React from "react";
import { useState, useContext } from "react";
import { JoblyApi } from "../API";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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

    alert("Profile updated!");

    return (
      navigate("/profile")
    );
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div class="flex flex-col items-center bg-job-hiring bg-scroll min-h-screen justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Edit profile
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlfor="username-input">Username:</label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 form-control item"
                disabled="disabled"
                name="username"
                id="username-input"
                value={user.username}
              ></input>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlfor="firstName-input">First Name:</label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 form-control item"
                name="firstName"
                id="firstName-input"
                value={formData.firstName}
                onChange={handleChange}
              ></input>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlfor="lastName-input ">Last Name:</label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 form-control item"
                name="lastName"
                id="lastName-input"
                value={formData.lastName}
                onChange={handleChange}
              ></input>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlfor="email-input">Email:</label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 form-control item"
                name="email"
                id="email-input"
                value={formData.email}
                onChange={handleChange}
              ></input>
            </div>

            <div>
              <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 btn-primary btn-block create-account">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}

export default ProfileForm;;