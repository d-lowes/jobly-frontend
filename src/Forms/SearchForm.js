import { React, useState } from "react";

/** Render a search form.
 *
 * Props:
 *
 * State:
 * - formData: search form data
 *
 * {Jobs, CompanyDetail} -> SearchForm
 */
function SearchForm({ search }) {
  const [formData, setFormData] = useState("");

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    search(formData.trim());
    setFormData("");
  }

  /** Update form input. */
  function handleChange(evt) {
    const { value } = evt.target;
    setFormData(value);
  }

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 form-control item"
          placeholder="Search keywords"
          value={formData}
          onChange={handleChange}>
        </input>
        <div>
          <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 btn-primary btn-block create-account">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;