import React from "react";
import { useEffect, useState } from "react";
import { JoblyApi } from "./API";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";



/** Render a list of companies.
 *
 * State:
 * - companies: a current list of companies
 *
 * RoutesList -> Companies -> { CompanyCard, SearchForm }
 */
function Companies() {
  const [companies, setCompanies] = useState([]);

  /** Renders all companies on mount. */
  useEffect(() => {
    searchCompanies();
  }, []);

  /** Retrieve a list of companies from the API. */
  async function searchCompanies(searchInput) {
    const companies = await JoblyApi.getCompanies(searchInput);
    setCompanies(companies);
  }

  return (
    <div>
      <h1>Companies</h1>
      <SearchForm search={searchCompanies} />
      <div className="company-list">
        {companies.map(c =>
          <CompanyCard
            key={c.handle}
            handle={c.handle}
            name={c.name}
            description={c.description}
            logoUrl={c.logoUrl} />)}
      </div>
    </div>
  );
}

export default Companies;