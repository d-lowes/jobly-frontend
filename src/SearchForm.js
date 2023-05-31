import { React, useState } from "react";

function SearchForm({ search }) {
  const [formData, setFormData] = useState("");

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    search(formData);
    setFormData("");
  }

  /** Update form input. */
  function handleChange(evt) {
    const { value } = evt.target;
    setFormData(value);
   }

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
        placeholder="Search for a company"
        value={formData}
        onChange={handleChange}>
        </input>
        <button className="btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default SearchForm;