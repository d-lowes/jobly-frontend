import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/** Render a Login form.
 *
 * Props:
 * - login: function that authenticates user
 *
 * State:
 * - formData: user's infotmation inputs
 *
 * { NavBar, RoutesList } -> LoginForm
 */
function LoginForm({ login }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
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
    await login(formData);
    navigate("/");
  }

  return (
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="username-input">Username:</label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="username"
                id="username-input"
                value={formData.username}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="password-input">Password:</label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="password"
                id="password-input"
                value={formData.password}
                type="password"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
            </div>
          </form >
        </div >
      </div >
    </div>
  );
}

export default LoginForm;